<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="width: 500px; margin-top: 20px">
    <el-form-item label="用户名：" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="密码：" prop="passWord">
      <el-input v-model="ruleForm.passWord"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "VueInduceVerify",

  data() {
    const isContinuousChar = str => {
      var arr = str.split("")
      var flag = true
      for (var i = 1; i < arr.length - 1; i++) {
        var firstIndex = arr[i - 1].charCodeAt()
        var secondIndex = arr[i].charCodeAt()
        var thirdIndex = arr[i + 1].charCodeAt()
        thirdIndex - secondIndex == 1
        secondIndex - firstIndex == 1
        if (thirdIndex - secondIndex == 1 && secondIndex - firstIndex == 1) {
          flag = false
        }
      }
      return !flag
    }
    const CHAR_TABLE1 = [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "\0"],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\0", "\0"],
      ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "\0", "\0", "\0"]
    ]
    /**
     * shift键盘的字符表
     */
    const CHAR_TABLE2 = [
      ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "\0"],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "|"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", ":", '"', "\0", "\0"],
      ["z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "\0", "\0", "\0"]
    ]
    const isKeyBoardContinuousChar = password => {
      if (password === "") {
        return false
      }
      //考虑大小写，都转换成小写字母
      let lpStrChars = password.toLowerCase().split("")
      // 获取字符串长度
      let nStrLen = lpStrChars.length
      // 定义位置数组：row - 行，col - column 列
      const pRowCharPos = new Array(nStrLen).fill("")
      const pColCharPos = new Array(nStrLen).fill("")
      for (let i = 0; i < nStrLen; i++) {
        let chLower = lpStrChars[i]
        pColCharPos[i] = -1
        // 检索在表1中的位置，构建位置数组
        for (let nRowTable1Idx = 0; nRowTable1Idx < 4; nRowTable1Idx++) {
          for (let nColTable1Idx = 0; nColTable1Idx < 13; nColTable1Idx++) {
            if (chLower == CHAR_TABLE1[nRowTable1Idx][nColTable1Idx]) {
              pRowCharPos[i] = nRowTable1Idx
              pColCharPos[i] = nColTable1Idx
            }
          }
        }
        // 在表1中没找到，到表二中去找，找到则continue
        if (pColCharPos[i] >= 0) {
          continue
        }
        // 检索在表2中的位置，构建位置数组
        for (let nRowTable2Idx = 0; nRowTable2Idx < 4; nRowTable2Idx++) {
          for (let nColTable2Idx = 0; nColTable2Idx < 13; nColTable2Idx++) {
            if (chLower == CHAR_TABLE2[nRowTable2Idx][nColTable2Idx]) {
              pRowCharPos[i] = nRowTable2Idx
              pColCharPos[i] = nColTable2Idx
            }
          }
        }
      }
      // 匹配坐标连线
      for (let j = 1; j <= nStrLen - 2; j++) {
        //同一行
        if (pRowCharPos[j - 1] == pRowCharPos[j] && pRowCharPos[j] == pRowCharPos[j + 1]) {
          // 键盘行正向连续（asd）或者键盘行反向连续（dsa）
          if (
            (pColCharPos[j - 1] + 1 == pColCharPos[j] && pColCharPos[j] + 1 == pColCharPos[j + 1]) ||
            (pColCharPos[j + 1] + 1 == pColCharPos[j] && pColCharPos[j] + 1 == pColCharPos[j - 1])
          ) {
            return true
          }
        }
        //同一列
        if (pColCharPos[j - 1] == pColCharPos[j] && pColCharPos[j] == pColCharPos[j + 1]) {
          //键盘列连续（qaz）或者键盘列反向连续（zaq）
          if (
            (pRowCharPos[j - 1] + 1 == pRowCharPos[j] && pRowCharPos[j] + 1 == pRowCharPos[j + 1]) ||
            (pRowCharPos[j - 1] - 1 == pRowCharPos[j] && pRowCharPos[j] - 1 == pRowCharPos[j + 1])
          ) {
            return true
          }
        }
      }
      return false
    }
    const REG_NUMBER = ".*\\d+.*"
    const REG_UPPERCASE = ".*[A-Z]+.*"
    const REG_LOWERCASE = ".*[a-z]+.*"
    const REG_SYMBOL = ".*[~!@#$%^&*()_+|<>,.?/:;'\\[\\]{}\"]+.*"
    const authAllSpecial = password => {
      let i = 0
      if (password.match(REG_NUMBER)) i++
      if (password.match(REG_LOWERCASE) && password.match(REG_UPPERCASE)) i++
      if (password.match(REG_SYMBOL)) i++
      return i >= 3
    }
    const validatePass = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error("密码不能为空"))
      } else if (value.length <= 8) {
        callback(new Error("密码长度必须大于8"))
      } else if (value.includes(this.ruleForm.name) && value.length == 0) {
        callback(new Error("请勿包含用户名"))
      } else if (isContinuousChar(value) || /(\w)*(\w)\2{2}(\w)*/g.test(value)) {
        callback(new Error("请勿包含3个及以上相同或连续的字符"))
      } else if (isKeyBoardContinuousChar(value)) {
        callback(new Error("请勿包含3个及以上键盘连续字符"))
      } else if (!authAllSpecial(value)) {
        callback(new Error("数字、大小写字母、特殊字符，至少包含三种及以上"))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        passWord: "",
        name: ""
      },
      rules: {
        passWord: { validator: validatePass, trigger: "change" }
      }
    }
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>
