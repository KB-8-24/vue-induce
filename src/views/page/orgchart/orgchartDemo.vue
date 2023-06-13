<template>
  <div>
    <div>
      <!-- 样式需要注意 -->
      <vo-basic class="basic" :data="chartData"></vo-basic>
    </div>
  </div>
</template>
<script>
import "vue-orgchart/dist/style.min.css"
import { VoBasic } from "vue-orgchart"
export default {
  name: "orgchartDemo",
  components: { VoBasic },
  data() {
    return {
      time: null,
      chartData: {
        id: "6a0ccd5595fb4631a714765e26a71df8",
        parentId: "",
        path: "0001",
        name: "唐山市燃气集团有限公司",
        aliasName: "System",
        address: "银河-太阳系-地球",
        telephone: "",
        email: "wizzer@qq.com",
        website: "https://wizzer.cn",
        location: 0,
        hasChildren: true,
        item: {
          value: "company",
          text: "总公司"
        },
        memberCount: 0,
        status: {
          value: 0,
          text: "启用"
        },
        tag: false,
        createdBy: "",
        createdAt: 1583802789594,
        updatedBy: "99bc81e2c674418391fedd439d457799",
        updatedAt: 1615425438833,
        delFlag: false,
        label: "唐山市燃气集团有限公司",
        children: [
          {
            id: "1a42e6b669334782ba89a1255091de1a",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010007",
            name: "党委工作办公室",
            location: 1,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614586893644,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616729706913,
            delFlag: false,
            label: "党委工作办公室"
          },
          {
            id: "fc6e2c5989674354a2534580357be567",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010006",
            name: "综合办公室",
            location: 2,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614586873627,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616729700831,
            delFlag: false,
            label: "综合办公室"
          },
          {
            id: "f901ad905054493bb4dc60e9cbdafc52",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010008",
            name: "纪检",
            location: 3,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614586947308,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616729712720,
            delFlag: false,
            label: "纪检"
          },
          {
            id: "57530f5f499f44c5822ce7f9f5b315f1",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010009",
            name: "工会",
            location: 4,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587157341,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616729719048,
            delFlag: false,
            label: "工会"
          },
          {
            id: "1f91ae59df3a4ad286398858270e00d1",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010010",
            name: "企业管理部",
            location: 5,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587173902,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1615425447330,
            delFlag: false,
            label: "企业管理部"
          },
          {
            id: "f3238d6bb5a24b2987d8025c83154539",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010011",
            name: "人力资源部",
            location: 6,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587187901,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616729725148,
            delFlag: false,
            label: "人力资源部"
          },
          {
            id: "775a07c4711148568d627ff9585cad73",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010012",
            name: "财务部",
            location: 7,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587203523,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616729731850,
            delFlag: false,
            label: "财务部"
          },
          {
            id: "494a8d79a35847f6a88e20371a5a5c34",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010013",
            name: "生产调度部",
            location: 8,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587218204,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616729738210,
            delFlag: false,
            label: "生产调度部"
          },
          {
            id: "58fae3036e2040d9b3e18ad320cab58a",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010014",
            name: "安全部",
            location: 9,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587233629,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1615425457044,
            delFlag: false,
            label: "安全部"
          },
          {
            id: "361f419e3fe3438899dc416d86b5c6a3",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010015",
            name: "技术部",
            location: 10,
            hasChildren: true,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587248484,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616729745007,
            delFlag: false,
            label: "技术部",
            children: [
              {
                id: "61380225d9094110b7ecba471b2ddc22",
                parentId: "361f419e3fe3438899dc416d86b5c6a3",
                path: "000100150001",
                name: "信息中心",
                location: 11,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1622158601378,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1622158601378,
                delFlag: false,
                label: "信息中心"
              }
            ]
          },
          {
            id: "e3a7afde851c4648a73bfefb2a827f75",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010016",
            name: "规划发展部",
            location: 12,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587267187,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616729754225,
            delFlag: false,
            label: "规划发展部"
          },
          {
            id: "b2a5e9eaec0647398c040283712a39d5",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010042",
            name: "市场开发部",
            location: 13,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1635651927888,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1635651927888,
            delFlag: false,
            label: "市场开发部"
          },
          {
            id: "1538418fa58b4c58b7732b97bd0053ac",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010017",
            name: "基建工程部",
            location: 14,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587281412,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616729761844,
            delFlag: false,
            label: "基建工程部"
          },
          {
            id: "0278c568ddd94e7c9b9638d69728d7c7",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010018",
            name: "营业服务部",
            location: 15,
            hasChildren: true,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587296925,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616729970254,
            delFlag: false,
            label: "营业服务部",
            children: [
              {
                id: "8f655f1730f744d99535bc95d1be06e7",
                parentId: "0278c568ddd94e7c9b9638d69728d7c7",
                path: "000100180001",
                name: "客服中心",
                unitcode: "",
                location: 16,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "",
                createdAt: 1615203455759,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616729992268,
                delFlag: false,
                label: "客服中心"
              }
            ]
          },
          {
            id: "9fb76225116e4c45a2b051dbf771e922",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010021",
            name: "唐山市燃气集团第一分公司",
            location: 17,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587338285,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1620395055991,
            delFlag: false,
            label: "唐山市燃气集团第一分公司",
            children: [
              {
                id: "c7b17efafc2840f18060b8a649b96a3c",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210001",
                name: "安全科",
                location: 18,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746352731,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1637656635967,
                delFlag: false,
                label: "安全科"
              },
              {
                id: "47c65a0836d2442da813a3a7a954eae6",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210002",
                name: "市场开发科",
                location: 19,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746382590,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746382590,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "4e52ee7069ad450abfeb66f2ee218e55",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210003",
                name: "营业服务科",
                location: 20,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746414929,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746414929,
                delFlag: false,
                label: "营业服务科"
              },
              {
                id: "cf925c456cf0421dbc0b6239464f13ed",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210004",
                name: "外巡抢险所",
                location: 21,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746452222,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746452222,
                delFlag: false,
                label: "外巡抢险所"
              },
              {
                id: "9e194c8b4c4c43ff86acffd9cb71bc67",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210005",
                name: "庆北服务所",
                location: 22,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746499912,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746499912,
                delFlag: false,
                label: "庆北服务所"
              },
              {
                id: "fdcb2702c9f840c9938b7d27a7f2e067",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210006",
                name: "龙泉西里服务所",
                location: 23,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746521430,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746521430,
                delFlag: false,
                label: "龙泉西里服务所"
              },
              {
                id: "6cda4bf66f944240859c031894911a3c",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210007",
                name: "祥富里服务所",
                location: 24,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746545571,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746545571,
                delFlag: false,
                label: "祥富里服务所"
              },
              {
                id: "05162c5af87f47ef83fa217bd8108bcf",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210008",
                name: "和平楼服务所",
                location: 25,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746572276,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746572276,
                delFlag: false,
                label: "和平楼服务所"
              },
              {
                id: "e2758a692ec6486897f01e9bd57e7c40",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210009",
                name: "智慧港服务所",
                location: 26,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746587920,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746587920,
                delFlag: false,
                label: "智慧港服务所"
              },
              {
                id: "c2b85b79899d48368f0a3c73c318e17d",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210010",
                name: "综合办公室",
                location: 27,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621914218493,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621914237709,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "ed6d6cc4ebad4f9e8cf0c10ebb7867ff",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210011",
                name: "生产科",
                location: 28,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621914942910,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621914942910,
                delFlag: false,
                label: "生产科"
              },
              {
                id: "fe6d5302abca4f729bd7eba5d7c0a06a",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210012",
                name: "企管财务科",
                location: 29,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621914956707,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621914956707,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "ed131c530c174a1c9f11ee5ac2cd22b7",
                parentId: "9fb76225116e4c45a2b051dbf771e922",
                path: "000100210013",
                name: "班组成员",
                location: 30,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916248182,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916248182,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "f9b3e14d40444eb59c1dfdae4dad5359",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010022",
            name: "唐山市燃气集团第二分公司",
            location: 31,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587351982,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616730048188,
            delFlag: false,
            label: "唐山市燃气集团第二分公司",
            children: [
              {
                id: "5131e1618f9a48d4b2db166cb19c7a51",
                parentId: "f9b3e14d40444eb59c1dfdae4dad5359",
                path: "000100220002",
                name: "安全科",
                location: 32,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746649600,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746649600,
                delFlag: false,
                label: "安全科"
              },
              {
                id: "fd9ab522bc584da88679612db59e980a",
                parentId: "f9b3e14d40444eb59c1dfdae4dad5359",
                path: "000100220003",
                name: "市场开发科",
                location: 33,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746665233,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746665233,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "bf73a5d89d81403ebed7bcef63167df7",
                parentId: "f9b3e14d40444eb59c1dfdae4dad5359",
                path: "000100220004",
                name: "营业服务科",
                location: 34,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746685043,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746685043,
                delFlag: false,
                label: "营业服务科"
              },
              {
                id: "d4dca9fdbe024c31b6be1b3ba745a308",
                parentId: "f9b3e14d40444eb59c1dfdae4dad5359",
                path: "000100220005",
                name: "外巡抢修所",
                location: 35,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746764739,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746764739,
                delFlag: false,
                label: "外巡抢修所"
              },
              {
                id: "99a4503acbc7482ba43d07fd7a2b3d26",
                parentId: "f9b3e14d40444eb59c1dfdae4dad5359",
                path: "000100220006",
                name: "51号服务所",
                location: 36,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746778696,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746778696,
                delFlag: false,
                label: "51号服务所"
              },
              {
                id: "d97121b5a70744af854a46a583168cd1",
                parentId: "f9b3e14d40444eb59c1dfdae4dad5359",
                path: "000100220007",
                name: "桐凤里服务所",
                location: 37,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746795677,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746795677,
                delFlag: false,
                label: "桐凤里服务所"
              },
              {
                id: "eee694da5c5a4585bc90abd944af1542",
                parentId: "f9b3e14d40444eb59c1dfdae4dad5359",
                path: "000100220008",
                name: "骏安园服务所",
                location: 38,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746813335,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746813335,
                delFlag: false,
                label: "骏安园服务所"
              },
              {
                id: "845734c273ce41d295f9816d8c8eb8ef",
                parentId: "f9b3e14d40444eb59c1dfdae4dad5359",
                path: "000100220009",
                name: "韩城服务所",
                location: 39,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746854781,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746854782,
                delFlag: false,
                label: "韩城服务所"
              },
              {
                id: "f3022961e0174fb099b63f21da611483",
                parentId: "f9b3e14d40444eb59c1dfdae4dad5359",
                path: "000100220010",
                name: "综合办公室",
                location: 40,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621914266760,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621914266760,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "b1ac3861da494cb2b01c368e38971344",
                parentId: "f9b3e14d40444eb59c1dfdae4dad5359",
                path: "000100220011",
                name: "企管财务科",
                location: 41,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621914975226,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621914975226,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "c04e9d46cd00405a9373ebb2484f7259",
                parentId: "f9b3e14d40444eb59c1dfdae4dad5359",
                path: "000100220012",
                name: "生产科",
                location: 42,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915007962,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915007962,
                delFlag: false,
                label: "生产科"
              },
              {
                id: "ea14d55605914debb9ff62d668b42435",
                parentId: "f9b3e14d40444eb59c1dfdae4dad5359",
                path: "000100220013",
                name: "班组成员",
                location: 43,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916255728,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916255728,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "45db37ee13654c7fad1108bfdcb95072",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010023",
            name: "唐山市燃气集团第三分公司",
            location: 44,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587364168,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616730077251,
            delFlag: false,
            label: "唐山市燃气集团第三分公司",
            children: [
              {
                id: "04e4bf4c3f444ac1b28b456a9ef97514",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230001",
                name: "综合办公室",
                location: 45,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1614587771096,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1614587771096,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "882905c1cfa5479aa86056de71519633",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230002",
                name: "安全科",
                location: 46,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746882183,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746882183,
                delFlag: false,
                label: "安全科"
              },
              {
                id: "8a3d216aecdb4daa9eb951db671cb201",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230003",
                name: "市场开发科",
                location: 47,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746906183,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746906183,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "a8c09f522a0542bdb01e0f5c22c25fad",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230004",
                name: "营业服务科",
                location: 48,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746924138,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746924138,
                delFlag: false,
                label: "营业服务科"
              },
              {
                id: "ac330667de344934a52284d80371a0b5",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230005",
                name: "外巡抢修所",
                location: 49,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746945432,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746945432,
                delFlag: false,
                label: "外巡抢修所"
              },
              {
                id: "82f42ddd27af4c82aab72a3223f143c4",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230006",
                name: "福乐园服务所",
                location: 50,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746960985,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746960985,
                delFlag: false,
                label: "福乐园服务所"
              },
              {
                id: "6d5e752ffed248619e943066b2ce5d28",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230007",
                name: "仁泰里服务所",
                location: 51,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746979181,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746979181,
                delFlag: false,
                label: "仁泰里服务所"
              },
              {
                id: "4fdd73463c094163adaab193682727b1",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230008",
                name: "富强楼服务所",
                location: 52,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616746997571,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616746997571,
                delFlag: false,
                label: "富强楼服务所"
              },
              {
                id: "81e66a1e23db49208cf45c28eeb59313",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230009",
                name: "文北服务所",
                location: 53,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747011527,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747011527,
                delFlag: false,
                label: "文北服务所"
              },
              {
                id: "19d2c0749d754c57bf4331bc3df42737",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230010",
                name: "旭安园气代煤服务所",
                location: 54,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747029477,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1622022300236,
                delFlag: false,
                label: "旭安园气代煤服务所"
              },
              {
                id: "6e2e89d22b814d0599a414671401ec8a",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230011",
                name: "企管财务科",
                location: 55,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621914984098,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621914984098,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "a380be7a131848c98ddfabe4f4f9ed28",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230012",
                name: "生产科",
                location: 56,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621914997994,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621914997994,
                delFlag: false,
                label: "生产科"
              },
              {
                id: "a578e83717eb4f8c89516213c1cdae84",
                parentId: "45db37ee13654c7fad1108bfdcb95072",
                path: "000100230013",
                name: "班组成员",
                location: 57,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916263727,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916263727,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "4336949363e44b0da83609d0878f1f80",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010024",
            name: "唐山市燃气集团丰润分公司",
            location: 58,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587378475,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616730093396,
            delFlag: false,
            label: "唐山市燃气集团丰润分公司",
            children: [
              {
                id: "a14b69c2a5ae4ad0bb07affef5a9e12e",
                parentId: "4336949363e44b0da83609d0878f1f80",
                path: "000100240001",
                name: "综合办公室",
                location: 59,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1614587805424,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1614587805424,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "dbb341abdc4345bd9f89d84ca67a88f9",
                parentId: "4336949363e44b0da83609d0878f1f80",
                path: "000100240002",
                name: "安全科",
                location: 60,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747088671,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747088671,
                delFlag: false,
                label: "安全科"
              },
              {
                id: "85ab86c9a8e44525b6ca5dc095249f4d",
                parentId: "4336949363e44b0da83609d0878f1f80",
                path: "000100240003",
                name: "市场开发科",
                location: 61,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747127016,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747127016,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "fd863a93aef1400592af12c4974f05c0",
                parentId: "4336949363e44b0da83609d0878f1f80",
                path: "000100240004",
                name: "营业服务科",
                location: 62,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747167289,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747167289,
                delFlag: false,
                label: "营业服务科"
              },
              {
                id: "1f97027c915247638d9c80e45025706e",
                parentId: "4336949363e44b0da83609d0878f1f80",
                path: "000100240005",
                name: "外巡抢修所",
                location: 63,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747189909,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747189909,
                delFlag: false,
                label: "外巡抢修所"
              },
              {
                id: "0c42b6dc2e754f23bcb74c28d791d119",
                parentId: "4336949363e44b0da83609d0878f1f80",
                path: "000100240006",
                name: "城西服务所",
                location: 64,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747218223,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747218223,
                delFlag: false,
                label: "城西服务所"
              },
              {
                id: "f3e411b2f9ce40be9e007ed1c59cff52",
                parentId: "4336949363e44b0da83609d0878f1f80",
                path: "000100240007",
                name: "金泰服务所",
                location: 65,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747238650,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747238650,
                delFlag: false,
                label: "金泰服务所"
              },
              {
                id: "c63adbd9afb94b68b0cd5b05ffdf18f3",
                parentId: "4336949363e44b0da83609d0878f1f80",
                path: "000100240008",
                name: "乡居假日气代煤服务所",
                location: 66,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747282389,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747282389,
                delFlag: false,
                label: "乡居假日气代煤服务所"
              },
              {
                id: "091ffe2646e346f09934b7cdf94629cb",
                parentId: "4336949363e44b0da83609d0878f1f80",
                path: "000100240009",
                name: "中建城气代煤服务所",
                location: 67,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747301358,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747301358,
                delFlag: false,
                label: "中建城气代煤服务所"
              },
              {
                id: "98845f086bf64222b66389e342768652",
                parentId: "4336949363e44b0da83609d0878f1f80",
                path: "000100240010",
                name: "企管财务科",
                location: 68,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915043988,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915043988,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "fb4f2cce0c904760a3404beba33ecfd3",
                parentId: "4336949363e44b0da83609d0878f1f80",
                path: "000100240011",
                name: "生产科",
                location: 69,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915051329,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915051329,
                delFlag: false,
                label: "生产科"
              },
              {
                id: "f3a0cc58a2d4430f9957658a3a9a3af3",
                parentId: "4336949363e44b0da83609d0878f1f80",
                path: "000100240012",
                name: "班组成员",
                location: 70,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916270743,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916270743,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "609b1091754349e3bd22b92e75042f3b",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010025",
            name: "唐山市燃气集团管网分公司",
            location: 71,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587392817,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616730207865,
            delFlag: false,
            label: "唐山市燃气集团管网分公司",
            children: [
              {
                id: "94c481a459d1435e84a126eb34df1438",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250001",
                name: "综合办公室",
                location: 72,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1614587821237,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1614587821237,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "6cff7e517bae4ff08132e88d7fc65b06",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250002",
                name: "抢险中心",
                location: 73,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747360863,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747360863,
                delFlag: false,
                label: "抢险中心"
              },
              {
                id: "958a120163f443b9a475475611fcbaa2",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250003",
                name: "调压中心",
                location: 74,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747393482,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747393482,
                delFlag: false,
                label: "调压中心"
              },
              {
                id: "cc06b585f13d438db76d35df050cd15c",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250004",
                name: "巡线中心",
                location: 75,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747409723,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747409723,
                delFlag: false,
                label: "巡线中心"
              },
              {
                id: "c6d934f53e494dc1b9b1e13acac647ae",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250005",
                name: "西外环所",
                location: 76,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747429628,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747429628,
                delFlag: false,
                label: "西外环所"
              },
              {
                id: "2be839c08005459d95328244ba729ed5",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250006",
                name: "新房子所",
                location: 77,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747448280,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747448280,
                delFlag: false,
                label: "新房子所"
              },
              {
                id: "d66d089cfaab434192df42ca5f69f141",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250007",
                name: "韩城所",
                location: 78,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747467183,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747467183,
                delFlag: false,
                label: "韩城所"
              },
              {
                id: "e0a5c73a0d9940899537a88eac531924",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250008",
                name: "半壁店所",
                location: 79,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747486296,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747486296,
                delFlag: false,
                label: "半壁店所"
              },
              {
                id: "97bd2187c75a457eb2f64480dbffd813",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250009",
                name: "越河所",
                location: 80,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747500443,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747500443,
                delFlag: false,
                label: "越河所"
              },
              {
                id: "547fdea9a99345dc8dde75993bf869b7",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250010",
                name: "丰润所",
                location: 81,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747519178,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747519178,
                delFlag: false,
                label: "丰润所"
              },
              {
                id: "7e6e870a7838404daab43649ef0cb83a",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250011",
                name: "空港所",
                location: 82,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747537176,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747537176,
                delFlag: false,
                label: "空港所"
              },
              {
                id: "1627431a65e648b1b61295cc3d6ed8fd",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250012",
                name: "管网罐站",
                location: 83,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747553225,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747553225,
                delFlag: false,
                label: "管网罐站"
              },
              {
                id: "91e0470d65f24b73862f3ef3f95c4b48",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250013",
                name: "企管财务科",
                location: 84,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915093858,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915093858,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "44f59ee25f594b21b494e8cdf36c9845",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250014",
                name: "安全生产科",
                location: 85,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915106553,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915106553,
                delFlag: false,
                label: "安全生产科"
              },
              {
                id: "657e17e8ff854c46bb0d7e06e8e8c8ef",
                parentId: "609b1091754349e3bd22b92e75042f3b",
                path: "000100250015",
                name: "班组成员",
                location: 86,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916280992,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916280992,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "e239313e4bec4da89162abcc3f599b85",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010026",
            name: "唐山市燃气集团计控中心",
            location: 87,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587409103,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616730423628,
            delFlag: false,
            label: "唐山市燃气集团计控中心",
            children: [
              {
                id: "0d089e6b19f84e55927236ab20ee32c9",
                parentId: "e239313e4bec4da89162abcc3f599b85",
                path: "000100260001",
                name: "综合办公室",
                location: 88,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1614587835799,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1614587835799,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "663fcddf0f38469c871dcc0c527829de",
                parentId: "e239313e4bec4da89162abcc3f599b85",
                path: "000100260002",
                name: "数据分析科",
                location: 89,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747628043,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747628043,
                delFlag: false,
                label: "数据分析科"
              },
              {
                id: "1c5cddb832b24d689d653115399a11f6",
                parentId: "e239313e4bec4da89162abcc3f599b85",
                path: "000100260003",
                name: "远传系统管理科",
                location: 90,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747646394,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747646394,
                delFlag: false,
                label: "远传系统管理科"
              },
              {
                id: "56e9d511cd8d4a58a9d7da6b14791d1c",
                parentId: "e239313e4bec4da89162abcc3f599b85",
                path: "000100260004",
                name: "企管财务科",
                location: 91,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915124892,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915124892,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "606c6e6b88e247489822391a1d70b7d0",
                parentId: "e239313e4bec4da89162abcc3f599b85",
                path: "000100260005",
                name: "计量科",
                location: 92,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915135617,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915135617,
                delFlag: false,
                label: "计量科"
              },
              {
                id: "64edbc8fee6f419ea71d43ef356210e5",
                parentId: "e239313e4bec4da89162abcc3f599b85",
                path: "000100260006",
                name: "班组成员",
                location: 93,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916290130,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916290130,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "dca2982fafe34e4d89d5e8188d57fbe3",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010027",
            name: "唐山市燃气集团供应中心",
            location: 94,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587427818,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616730446404,
            delFlag: false,
            label: "唐山市燃气集团供应中心",
            children: [
              {
                id: "e5383d2f71d54ebfac6ec29193f151a1",
                parentId: "dca2982fafe34e4d89d5e8188d57fbe3",
                path: "000100270001",
                name: "综合办公室",
                location: 95,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1614587848057,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1614587848057,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "bb460b7faa6e482cb436d62c67bc11f0",
                parentId: "dca2982fafe34e4d89d5e8188d57fbe3",
                path: "000100270002",
                name: "仓储科",
                location: 96,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747805882,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747805882,
                delFlag: false,
                label: "仓储科"
              },
              {
                id: "bb17d09141084688b5b1aa9fd948dfd7",
                parentId: "dca2982fafe34e4d89d5e8188d57fbe3",
                path: "000100270003",
                name: "采购科",
                location: 97,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747826334,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747826334,
                delFlag: false,
                label: "采购科"
              },
              {
                id: "36e77bc83d3a43dc8d4b0ebfc98bda90",
                parentId: "dca2982fafe34e4d89d5e8188d57fbe3",
                path: "000100270004",
                name: "验表科",
                location: 98,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747842255,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616747842255,
                delFlag: false,
                label: "验表科"
              },
              {
                id: "d861d2a0f28342b18713097dc1652b94",
                parentId: "dca2982fafe34e4d89d5e8188d57fbe3",
                path: "000100270005",
                name: "企管财务科",
                location: 99,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915157546,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915157546,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "1a7e75d4d07848b785fb07f8cd0fa28d",
                parentId: "dca2982fafe34e4d89d5e8188d57fbe3",
                path: "000100270006",
                name: "计划科",
                location: 100,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915171120,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915171120,
                delFlag: false,
                label: "计划科"
              },
              {
                id: "c12f5f86d6a0458cb65bf47f157356e2",
                parentId: "dca2982fafe34e4d89d5e8188d57fbe3",
                path: "000100270007",
                name: "班组成员",
                location: 101,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916297497,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916297497,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "e55c33b27fb547c4a99767a0a95c84fb",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010028",
            name: "唐山市燃气集团客户服务有限公司",
            note: "子公司",
            location: 102,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587510963,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616730701033,
            delFlag: false,
            label: "唐山市燃气集团客户服务有限公司",
            children: [
              {
                id: "c50d2e9b00a24741ab7464afae3d64bd",
                parentId: "e55c33b27fb547c4a99767a0a95c84fb",
                path: "000100280001",
                name: "综合办公室",
                location: 103,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1614587863419,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1614587863419,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "6fc3272471a447e498ddf49cdbad3ff4",
                parentId: "e55c33b27fb547c4a99767a0a95c84fb",
                path: "000100280002",
                name: "市场部",
                location: 104,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616747984352,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1623374995745,
                delFlag: false,
                label: "市场部"
              },
              {
                id: "22eda25dea6847fda456e3476dd7838c",
                parentId: "e55c33b27fb547c4a99767a0a95c84fb",
                path: "000100280003",
                name: "运营科",
                location: 105,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748119176,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748119176,
                delFlag: false,
                label: "运营科"
              },
              {
                id: "a2dcdb660fca434f9268cd8e9ec5cac4",
                parentId: "e55c33b27fb547c4a99767a0a95c84fb",
                path: "000100280004",
                name: "客户管理科",
                location: 106,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748143545,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748143545,
                delFlag: false,
                label: "客户管理科"
              },
              {
                id: "e62ef1a0209a4d11b7c8ec06863081d6",
                parentId: "e55c33b27fb547c4a99767a0a95c84fb",
                path: "000100280005",
                name: "工程科",
                location: 107,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748177426,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748177426,
                delFlag: false,
                label: "工程科"
              },
              {
                id: "b32c75cd5bf345a6b5b363d5eb072977",
                parentId: "e55c33b27fb547c4a99767a0a95c84fb",
                path: "000100280006",
                name: "新能源科",
                location: 108,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748194803,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748194803,
                delFlag: false,
                label: "新能源科"
              },
              {
                id: "1ddcd0179e14440c8cd44c643b36ef49",
                parentId: "e55c33b27fb547c4a99767a0a95c84fb",
                path: "000100280007",
                name: "企管财务科",
                location: 109,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915194829,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915194829,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "776dfd945db04e6db3daddcd42f1248f",
                parentId: "e55c33b27fb547c4a99767a0a95c84fb",
                path: "000100280008",
                name: "采供科",
                location: 110,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915204865,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915204865,
                delFlag: false,
                label: "采供科"
              },
              {
                id: "316af48fd96848ec85a6acc06e36a4a2",
                parentId: "e55c33b27fb547c4a99767a0a95c84fb",
                path: "000100280009",
                name: "班组成员",
                location: 111,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916304695,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916304695,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "1630f232b9b94334ad8b356a4f7c57c1",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010029",
            name: "唐山市煤气工程设计研究院",
            location: 112,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587525243,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616732410218,
            delFlag: false,
            label: "唐山市煤气工程设计研究院",
            children: [
              {
                id: "4c0f4835d43b45d8ae018c9202c7eb03",
                parentId: "1630f232b9b94334ad8b356a4f7c57c1",
                path: "000100290001",
                name: "综合办公室",
                location: 113,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1614587875414,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1614587875414,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "bbd18a41d366448894e0f797baffadef",
                parentId: "1630f232b9b94334ad8b356a4f7c57c1",
                path: "000100290002",
                name: "市场开发科",
                location: 114,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748265920,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748265920,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "6ba78a9fd996419d8decbe6c394a84d7",
                parentId: "1630f232b9b94334ad8b356a4f7c57c1",
                path: "000100290003",
                name: "设计一科",
                location: 115,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748290455,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748290455,
                delFlag: false,
                label: "设计一科"
              },
              {
                id: "2e6adab657e7419b9adb0ec62fe1c19b",
                parentId: "1630f232b9b94334ad8b356a4f7c57c1",
                path: "000100290004",
                name: "设计二科",
                location: 116,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748321979,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748321979,
                delFlag: false,
                label: "设计二科"
              },
              {
                id: "3c6b38727dc5418e91dde9f94ab276c6",
                parentId: "1630f232b9b94334ad8b356a4f7c57c1",
                path: "000100290005",
                name: "设计三科",
                location: 117,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748341665,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748341665,
                delFlag: false,
                label: "设计三科"
              },
              {
                id: "aa988ca7d0994f24a8eca5fdd3d7c590",
                parentId: "1630f232b9b94334ad8b356a4f7c57c1",
                path: "000100290006",
                name: "设计四科",
                location: 118,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748365936,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748365936,
                delFlag: false,
                label: "设计四科"
              },
              {
                id: "38e7ab5e1f924410b2b1b77ee889c9e6",
                parentId: "1630f232b9b94334ad8b356a4f7c57c1",
                path: "000100290007",
                name: "企管财务科",
                location: 119,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915229021,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915229021,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "42786149f1184d439d754b8a32372936",
                parentId: "1630f232b9b94334ad8b356a4f7c57c1",
                path: "000100290008",
                name: "总工办",
                location: 120,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915237833,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915237833,
                delFlag: false,
                label: "总工办"
              },
              {
                id: "fe4e570940124d4380105c4df53ba3cb",
                parentId: "1630f232b9b94334ad8b356a4f7c57c1",
                path: "000100290009",
                name: "班组成员",
                location: 121,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916312417,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916312417,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "03658b5706084ba4bf7accd477bf4a31",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010030",
            name: "唐山市工程建设监理有限公司",
            unitcode: "子公司",
            location: 122,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587539903,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1616732430055,
            delFlag: false,
            label: "唐山市工程建设监理有限公司",
            children: [
              {
                id: "b6aab9a8a66b46f49529bbbb94f2ed63",
                parentId: "03658b5706084ba4bf7accd477bf4a31",
                path: "000100300001",
                name: "综合办公室",
                location: 123,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1614587889231,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1614587889231,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "4543e43a821c449aa2435df55431b514",
                parentId: "03658b5706084ba4bf7accd477bf4a31",
                path: "000100300002",
                name: "监理科",
                location: 124,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748559093,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748559093,
                delFlag: false,
                label: "监理科"
              },
              {
                id: "baab9dff2bf54f08a5cb338435277bab",
                parentId: "03658b5706084ba4bf7accd477bf4a31",
                path: "000100300003",
                name: "企管财务科",
                location: 125,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915256428,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915256428,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "5841e55223a2469db1a3921cd62a12f0",
                parentId: "03658b5706084ba4bf7accd477bf4a31",
                path: "000100300004",
                name: "市场开发科",
                location: 126,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915267296,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915267296,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "87275bad782e4f7c84239e8c16dc6886",
                parentId: "03658b5706084ba4bf7accd477bf4a31",
                path: "000100300005",
                name: "班组成员",
                location: 127,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916320056,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916320056,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "58796ed637e249d3abb24c18b88d457e",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010031",
            name: "唐山市公交压缩天然气有限公司",
            location: 128,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587554306,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1614587554306,
            delFlag: false,
            label: "唐山市公交压缩天然气有限公司",
            children: [
              {
                id: "4e93a1f25c39405eaa9e9c6621666820",
                parentId: "58796ed637e249d3abb24c18b88d457e",
                path: "000100310001",
                name: "综合办公室",
                location: 129,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1614587901526,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1614587901526,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "beecbab2fb214ccdbbab26f87ee1cc6c",
                parentId: "58796ed637e249d3abb24c18b88d457e",
                path: "000100310002",
                name: "收费服务科",
                location: 130,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748598842,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748598842,
                delFlag: false,
                label: "收费服务科"
              },
              {
                id: "71447c71d00e412f8eb00971d5cc35a8",
                parentId: "58796ed637e249d3abb24c18b88d457e",
                path: "000100310003",
                name: "西外环加气站",
                location: 131,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748617417,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748617417,
                delFlag: false,
                label: "西外环加气站"
              },
              {
                id: "f55e66a24f85407baddd033022982226",
                parentId: "58796ed637e249d3abb24c18b88d457e",
                path: "000100310004",
                name: "站前路加气站",
                location: 132,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748873270,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748873270,
                delFlag: false,
                label: "站前路加气站"
              },
              {
                id: "606c5f452868477b96ec808144f5b693",
                parentId: "58796ed637e249d3abb24c18b88d457e",
                path: "000100310005",
                name: "北郊加气站",
                location: 133,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748901197,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748901197,
                delFlag: false,
                label: "北郊加气站"
              },
              {
                id: "cedcd399e2664a80825ff8f1c84e2f97",
                parentId: "58796ed637e249d3abb24c18b88d457e",
                path: "000100310006",
                name: "东郊路加气站",
                location: 134,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748922226,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748922226,
                delFlag: false,
                label: "东郊路加气站"
              },
              {
                id: "1ddbe6ea40df42de91053415731b3aa8",
                parentId: "58796ed637e249d3abb24c18b88d457e",
                path: "000100310007",
                name: "古冶加气站",
                location: 135,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616748942517,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616748942517,
                delFlag: false,
                label: "古冶加气站"
              },
              {
                id: "d9221d6d03dd4767a5a8c88019581fa4",
                parentId: "58796ed637e249d3abb24c18b88d457e",
                path: "000100310009",
                name: "企管财务科",
                location: 136,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915309949,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915309949,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "40442f73d84d4472b495c4ecb3618163",
                parentId: "58796ed637e249d3abb24c18b88d457e",
                path: "000100310010",
                name: "安全生产科",
                location: 137,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915379902,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915379902,
                delFlag: false,
                label: "安全生产科"
              },
              {
                id: "b7a26659af48493f8bbbfe9d3126e4f6",
                parentId: "58796ed637e249d3abb24c18b88d457e",
                path: "000100310011",
                name: "班组成员",
                location: 138,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916331040,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916331040,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010032",
            name: "唐山市燃气集团工程有限公司",
            location: 139,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587567058,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1614587567058,
            delFlag: false,
            label: "唐山市燃气集团工程有限公司",
            children: [
              {
                id: "4596cdb92e7b42c4ad7f5e45ea7c6483",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320001",
                name: "综合办公室",
                location: 140,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1614587917578,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1614587917578,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "1143a14092d245918ad36a4e892c27e2",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320002",
                name: "工程建设科",
                location: 141,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749092777,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749092777,
                delFlag: false,
                label: "工程建设科"
              },
              {
                id: "0e48384f15b14c2991ab34ac2879de3f",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320003",
                name: "安全科",
                location: 142,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749454753,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749454753,
                delFlag: false,
                label: "安全科"
              },
              {
                id: "80d54cb7e51b42289945afb54492db5f",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320004",
                name: "市场开发科",
                location: 143,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749480483,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749480483,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "d8edd46ea6e44f77a24396fa7b899765",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320005",
                name: "第一项目部",
                location: 144,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749497702,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749497702,
                delFlag: false,
                label: "第一项目部"
              },
              {
                id: "585b353054c94e7d9e7318dc23c70c58",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320006",
                name: "第二项目部",
                location: 145,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749520901,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749520901,
                delFlag: false,
                label: "第二项目部"
              },
              {
                id: "e2e99c81b5b84c959f6ec565afb29915",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320007",
                name: "第三项目部",
                location: 146,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749550519,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749550519,
                delFlag: false,
                label: "第三项目部"
              },
              {
                id: "85c22f04d548415ca8f46f2dd29acb13",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320008",
                name: "第四项目部",
                location: 147,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749581713,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749581713,
                delFlag: false,
                label: "第四项目部"
              },
              {
                id: "623aded9067d4e9cb51956cb019091b0",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320009",
                name: "第五项目部",
                location: 148,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749598999,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749598999,
                delFlag: false,
                label: "第五项目部"
              },
              {
                id: "d469570fd23a4d78b7a454f9df18f833",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320010",
                name: "第六项目部",
                location: 149,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749627064,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749627064,
                delFlag: false,
                label: "第六项目部"
              },
              {
                id: "f0190edaa0af4ada87fd85c606f96831",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320011",
                name: "第七项目部",
                location: 150,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749645595,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749645595,
                delFlag: false,
                label: "第七项目部"
              },
              {
                id: "34feb7e7f69e41b79b2bbf94f8c6ff79",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320012",
                name: "第八项目部",
                location: 151,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749668398,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749668398,
                delFlag: false,
                label: "第八项目部"
              },
              {
                id: "1acd1affec8d4f24bc5d23683eb19ca4",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320013",
                name: "企管财务科",
                location: 152,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915435597,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915435597,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "2ac4caf1955b484c888f1b1913ae9f7b",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320014",
                name: "物供科",
                location: 153,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915454915,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915454915,
                delFlag: false,
                label: "物供科"
              },
              {
                id: "dabdb2fa988c4260af1a8a7fda73c7c6",
                parentId: "856fcdbc8dc1413dbeb4ea3c76ee3d32",
                path: "000100320015",
                name: "班组成员",
                location: 154,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916338131,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916338131,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "c1a6f23758e2479590935c6751fa44eb",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010033",
            name: "唐山市古冶燃气有限公司",
            location: 155,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587579518,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1614587579518,
            delFlag: false,
            label: "唐山市古冶燃气有限公司",
            children: [
              {
                id: "a0f49deefa644ac5a3a23bce3f662133",
                parentId: "c1a6f23758e2479590935c6751fa44eb",
                path: "000100330001",
                name: "综合办公室",
                location: 156,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1614587933853,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1614587933853,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "554784d5da9e48549c5c6f81096b9582",
                parentId: "c1a6f23758e2479590935c6751fa44eb",
                path: "000100330002",
                name: "市场开发科",
                location: 157,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749874972,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749874972,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "2b82e30eb2e94010a0ca1cfce20e5ac0",
                parentId: "c1a6f23758e2479590935c6751fa44eb",
                path: "000100330003",
                name: "营业服务科",
                location: 158,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749903538,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749903538,
                delFlag: false,
                label: "营业服务科"
              },
              {
                id: "bfabe3c8b3b14100863b5a63c968fb21",
                parentId: "c1a6f23758e2479590935c6751fa44eb",
                path: "000100330004",
                name: "外巡抢修所",
                location: 159,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749918697,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749918697,
                delFlag: false,
                label: "外巡抢修所"
              },
              {
                id: "98c127996308482a8160e2dcd820d769",
                parentId: "c1a6f23758e2479590935c6751fa44eb",
                path: "000100330005",
                name: "城区服务所",
                location: 160,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749933409,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749933409,
                delFlag: false,
                label: "城区服务所"
              },
              {
                id: "59dd17dbbfa741ca9363d9910cfd6d47",
                parentId: "c1a6f23758e2479590935c6751fa44eb",
                path: "000100330006",
                name: "习家套气代煤服务所",
                location: 161,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749947467,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749947467,
                delFlag: false,
                label: "习家套气代煤服务所"
              },
              {
                id: "8004fe43414546f29bf1ae998e25e5a9",
                parentId: "c1a6f23758e2479590935c6751fa44eb",
                path: "000100330007",
                name: "南范各庄气代煤服务所",
                location: 162,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749965219,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749965219,
                delFlag: false,
                label: "南范各庄气代煤服务所"
              },
              {
                id: "00b4ad2f0a0d466588f4d515e891c59b",
                parentId: "c1a6f23758e2479590935c6751fa44eb",
                path: "000100330008",
                name: "海子沿门站",
                location: 163,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616749984864,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616749984864,
                delFlag: false,
                label: "海子沿门站"
              },
              {
                id: "fcdb07afc7034c04a7e72f9a600b852d",
                parentId: "c1a6f23758e2479590935c6751fa44eb",
                path: "000100330009",
                name: "企管财务科",
                location: 164,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915475272,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915475272,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "f8058d4192e640ca82cb3366c60e6313",
                parentId: "c1a6f23758e2479590935c6751fa44eb",
                path: "000100330010",
                name: "安全生产科",
                location: 165,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915530963,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915530963,
                delFlag: false,
                label: "安全生产科"
              },
              {
                id: "20e17106cda54101bdd23bb306acde2b",
                parentId: "c1a6f23758e2479590935c6751fa44eb",
                path: "000100330011",
                name: "班组成员",
                location: 166,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916346495,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916346495,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "8b1608a4bc7b44ae8afef56eb2e5efa9",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010034",
            name: "唐山市开平燃气有限公司",
            location: 167,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587593925,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1614587593925,
            delFlag: false,
            label: "唐山市开平燃气有限公司",
            children: [
              {
                id: "48b2291f384c4f848471c8058173cf51",
                parentId: "8b1608a4bc7b44ae8afef56eb2e5efa9",
                path: "000100340001",
                name: "市场开发科",
                location: 168,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750044825,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750044825,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "b881d00b46024474be6c169039396c58",
                parentId: "8b1608a4bc7b44ae8afef56eb2e5efa9",
                path: "000100340002",
                name: "营业服务科",
                location: 169,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750058160,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750058160,
                delFlag: false,
                label: "营业服务科"
              },
              {
                id: "9b75cd3366814d99b3d41bd0ddea7efd",
                parentId: "8b1608a4bc7b44ae8afef56eb2e5efa9",
                path: "000100340003",
                name: "外巡抢修所",
                location: 170,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750076475,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750076475,
                delFlag: false,
                label: "外巡抢修所"
              },
              {
                id: "33c60819a1224e1f815edc7f647ae411",
                parentId: "8b1608a4bc7b44ae8afef56eb2e5efa9",
                path: "000100340004",
                name: "新城服务所",
                location: 171,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750089108,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750089108,
                delFlag: false,
                label: "新城服务所"
              },
              {
                id: "1ae4860166a94b6f902bfe4639c8b0fd",
                parentId: "8b1608a4bc7b44ae8afef56eb2e5efa9",
                path: "000100340005",
                name: "马家沟服务所",
                location: 172,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750105384,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750105384,
                delFlag: false,
                label: "马家沟服务所"
              },
              {
                id: "223b32a3f6444f9d807b8a2a72a4f883",
                parentId: "8b1608a4bc7b44ae8afef56eb2e5efa9",
                path: "000100340006",
                name: "陡电服务所",
                location: 173,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750120887,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750120887,
                delFlag: false,
                label: "陡电服务所"
              },
              {
                id: "fba45dcd33ce4f15a2b256bf1ac0e85e",
                parentId: "8b1608a4bc7b44ae8afef56eb2e5efa9",
                path: "000100340007",
                name: "企管财务科",
                location: 174,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915538414,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915538414,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "2e9d8a7232124af48583e7ce47b120a9",
                parentId: "8b1608a4bc7b44ae8afef56eb2e5efa9",
                path: "000100340008",
                name: "安全生产科",
                location: 175,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915718383,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915718383,
                delFlag: false,
                label: "安全生产科"
              },
              {
                id: "2e42062450f645fd875d2bc6a2321130",
                parentId: "8b1608a4bc7b44ae8afef56eb2e5efa9",
                path: "000100340009",
                name: "综合办公室",
                location: 176,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915726526,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915726526,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "241d56b1aa01446fb9f491c09977315d",
                parentId: "8b1608a4bc7b44ae8afef56eb2e5efa9",
                path: "000100340010",
                name: "班组成员",
                location: 177,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916355235,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916355235,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "4ca159b8eeb24f9bbbc10ed20145484f",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010035",
            name: "唐山市滦南燃气有限公司",
            location: 178,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587607786,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1614587607786,
            delFlag: false,
            label: "唐山市滦南燃气有限公司",
            children: [
              {
                id: "61e538878af04dfca83a9c57cbd64c7a",
                parentId: "4ca159b8eeb24f9bbbc10ed20145484f",
                path: "000100350001",
                name: "市场开发科",
                location: 179,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750175074,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750175074,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "8170de422c324fa995a94345480a791e",
                parentId: "4ca159b8eeb24f9bbbc10ed20145484f",
                path: "000100350002",
                name: "营业服务科",
                location: 180,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750197096,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750197096,
                delFlag: false,
                label: "营业服务科"
              },
              {
                id: "d7342e825e7247ceba48d48b6fe8c018",
                parentId: "4ca159b8eeb24f9bbbc10ed20145484f",
                path: "000100350003",
                name: "外巡抢修所",
                location: 181,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750214090,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750214091,
                delFlag: false,
                label: "外巡抢修所"
              },
              {
                id: "4bc08fe75c6d49abb7030f46a6671d75",
                parentId: "4ca159b8eeb24f9bbbc10ed20145484f",
                path: "000100350004",
                name: "城区服务所",
                location: 182,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750230004,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750230004,
                delFlag: false,
                label: "城区服务所"
              },
              {
                id: "7879c2556ff44052b0a08133c7b3dafb",
                parentId: "4ca159b8eeb24f9bbbc10ed20145484f",
                path: "000100350005",
                name: "宋道口服务所",
                location: 183,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750245051,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750245051,
                delFlag: false,
                label: "宋道口服务所"
              },
              {
                id: "babbb2deef8242ec994c238e4c2c2f59",
                parentId: "4ca159b8eeb24f9bbbc10ed20145484f",
                path: "000100350006",
                name: "程庄服务所",
                location: 184,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750259429,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750259429,
                delFlag: false,
                label: "程庄服务所"
              },
              {
                id: "b3d3e32dcb7b482f9fb2779fedc8f895",
                parentId: "4ca159b8eeb24f9bbbc10ed20145484f",
                path: "000100350007",
                name: "综合办公室",
                location: 185,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915859829,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915859829,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "fc08cf5cddf04462bc98eea93d7aad7b",
                parentId: "4ca159b8eeb24f9bbbc10ed20145484f",
                path: "000100350008",
                name: "企管财务科",
                location: 186,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621915934104,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621915934104,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "902154d5e9144fe9b9fa8724a853f5b4",
                parentId: "4ca159b8eeb24f9bbbc10ed20145484f",
                path: "000100350009",
                name: "安全生产科",
                location: 187,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916039971,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916039971,
                delFlag: false,
                label: "安全生产科"
              },
              {
                id: "17dbb6884f1d424394ddf8fcd6e24484",
                parentId: "4ca159b8eeb24f9bbbc10ed20145484f",
                path: "000100350010",
                name: "班组成员",
                location: 188,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916362239,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916362239,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "b80d2f4d549f41d7bd46d0d9872fcb02",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010036",
            name: "唐山市曹妃甸燃气有限公司",
            location: 189,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587619152,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1614587619152,
            delFlag: false,
            label: "唐山市曹妃甸燃气有限公司",
            children: [
              {
                id: "612636a84aae47ecb76c927750f67f18",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360001",
                name: "市场开发科",
                location: 190,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750324320,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750324320,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "514fb4ed347b47fea43b5f792d13ef97",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360002",
                name: "营业服务科",
                location: 191,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750339562,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750339562,
                delFlag: false,
                label: "营业服务科"
              },
              {
                id: "b29b70670dd14c7cbb7f9fd45276d43d",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360003",
                name: "外巡抢修所",
                location: 192,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750372348,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750372348,
                delFlag: false,
                label: "外巡抢修所"
              },
              {
                id: "a4a7063bb03d40a68352fbd492564196",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360004",
                name: "城区服务所",
                location: 193,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750391653,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750391653,
                delFlag: false,
                label: "城区服务所"
              },
              {
                id: "74175f5a33884e4e916dcccd07b60bfd",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360005",
                name: "气代煤服务所",
                location: 194,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750406920,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750406920,
                delFlag: false,
                label: "气代煤服务所"
              },
              {
                id: "c9d2c2e9b22642c2b52ea1334812951c",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360006",
                name: "青林路门站",
                location: 195,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750437959,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750437959,
                delFlag: false,
                label: "青林路门站"
              },
              {
                id: "4889d1c5590e4cc0a2920ae887fdaf32",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360007",
                name: "西区门站",
                location: 196,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750452995,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750452995,
                delFlag: false,
                label: "西区门站"
              },
              {
                id: "41d7c2346bb14607902ce047e1ff7359",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360008",
                name: "十一场门站",
                location: 197,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750472248,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750472248,
                delFlag: false,
                label: "十一场门站"
              },
              {
                id: "b891bc14cdf347d3a208e110b84412bb",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360009",
                name: "中小园区门站",
                location: 198,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750490583,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750490583,
                delFlag: false,
                label: "中小园区门站"
              },
              {
                id: "732e2e15bb854302b48c6b3f7247dec3",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360010",
                name: "综合办公室",
                location: 199,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916052435,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916052435,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "bec605efe0d24866a7cd26a355c8f18c",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360011",
                name: "企管财务科",
                location: 200,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916060307,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916060307,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "eff1633048104e63b08cf8e21f37935c",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360012",
                name: "安全生产科",
                location: 201,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916068146,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916068147,
                delFlag: false,
                label: "安全生产科"
              },
              {
                id: "ac0b8912212f4fde975d381c78fa2d93",
                parentId: "b80d2f4d549f41d7bd46d0d9872fcb02",
                path: "000100360013",
                name: "班组成员",
                location: 202,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916369401,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916369401,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "e394f8af6e5b4595b0c17d772b9db511",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010037",
            name: "唐山市丰南燃气有限公司",
            location: 203,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587633189,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1614587633189,
            delFlag: false,
            label: "唐山市丰南燃气有限公司",
            children: [
              {
                id: "ea28dd2526814e75b1f5a2ac152676df",
                parentId: "e394f8af6e5b4595b0c17d772b9db511",
                path: "000100370001",
                name: "市场开发科",
                location: 204,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750631931,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750631931,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "2d5091ef000d48ca8ebd53d141e6c057",
                parentId: "e394f8af6e5b4595b0c17d772b9db511",
                path: "000100370002",
                name: "营业服务科",
                location: 205,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750653478,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750653478,
                delFlag: false,
                label: "营业服务科"
              },
              {
                id: "80103d2bd39347968a226bf009c6ea2b",
                parentId: "e394f8af6e5b4595b0c17d772b9db511",
                path: "000100370003",
                name: "外巡抢修所",
                location: 206,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750716663,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750716663,
                delFlag: false,
                label: "外巡抢修所"
              },
              {
                id: "b8d84ea84a1d450d9b6a783837eea023",
                parentId: "e394f8af6e5b4595b0c17d772b9db511",
                path: "000100370004",
                name: "艾蒿岭服务所",
                location: 207,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750736498,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750736498,
                delFlag: false,
                label: "艾蒿岭服务所"
              },
              {
                id: "836186491c6b436c9843f7719dd59c29",
                parentId: "e394f8af6e5b4595b0c17d772b9db511",
                path: "000100370005",
                name: "汉沽门站",
                location: 208,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750752086,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750752086,
                delFlag: false,
                label: "汉沽门站"
              },
              {
                id: "adef39eb774d4744b6d4019f3a5b4cea",
                parentId: "e394f8af6e5b4595b0c17d772b9db511",
                path: "000100370006",
                name: "丰南门站+LNG站",
                location: 209,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750789208,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750789208,
                delFlag: false,
                label: "丰南门站+LNG站"
              },
              {
                id: "01914ac2911b485cad48aa81b0ecc41d",
                parentId: "e394f8af6e5b4595b0c17d772b9db511",
                path: "000100370007",
                name: "综合办公室",
                location: 210,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916149368,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916149368,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "9533beff9bdf477c98a691f4d468e3de",
                parentId: "e394f8af6e5b4595b0c17d772b9db511",
                path: "000100370008",
                name: "企管财务科",
                location: 211,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916154545,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916154545,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "82133e94215e4462ad5f08fe888212eb",
                parentId: "e394f8af6e5b4595b0c17d772b9db511",
                path: "000100370009",
                name: "安全生产科",
                location: 212,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916163210,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916163210,
                delFlag: false,
                label: "安全生产科"
              },
              {
                id: "9634ebc487ca4770a27412de16dae357",
                parentId: "e394f8af6e5b4595b0c17d772b9db511",
                path: "000100370010",
                name: "班组成员",
                location: 213,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916376128,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916376128,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "0fc809f5f90b40fbb0f7b253b2ebab7c",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010038",
            name: "唐山市海港燃气有限公司",
            location: 214,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1614587648810,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1614587648810,
            delFlag: false,
            label: "唐山市海港燃气有限公司",
            children: [
              {
                id: "14b5c596c774467d9b833e1a39f60e31",
                parentId: "0fc809f5f90b40fbb0f7b253b2ebab7c",
                path: "000100380001",
                name: "市场开发科",
                location: 215,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750857448,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750857448,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "e1367a50811149a0b788aa91e426a48b",
                parentId: "0fc809f5f90b40fbb0f7b253b2ebab7c",
                path: "000100380002",
                name: "营业服务科",
                location: 216,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750872720,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750872720,
                delFlag: false,
                label: "营业服务科"
              },
              {
                id: "015723e0175a4f5aaa3eaf8ced5cc90d",
                parentId: "0fc809f5f90b40fbb0f7b253b2ebab7c",
                path: "000100380003",
                name: "外巡抢修所",
                location: 217,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750892074,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750892074,
                delFlag: false,
                label: "外巡抢修所"
              },
              {
                id: "49650c40002e449c9f3b8a343b0a3a0a",
                parentId: "0fc809f5f90b40fbb0f7b253b2ebab7c",
                path: "000100380004",
                name: "服务所",
                location: 218,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750904240,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750904240,
                delFlag: false,
                label: "服务所"
              },
              {
                id: "451799dd00f646f2a6d0346b6c905819",
                parentId: "0fc809f5f90b40fbb0f7b253b2ebab7c",
                path: "000100380005",
                name: "LNG储配站",
                location: 219,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750916727,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750916727,
                delFlag: false,
                label: "LNG储配站"
              },
              {
                id: "06cfa41ccb804e1fbec4a4719ddfb77f",
                parentId: "0fc809f5f90b40fbb0f7b253b2ebab7c",
                path: "000100380006",
                name: "三岛CNG站",
                location: 220,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750930111,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750930111,
                delFlag: false,
                label: "三岛CNG站"
              },
              {
                id: "c578c3e25bd84258a8ac90b3fc5d3f3f",
                parentId: "0fc809f5f90b40fbb0f7b253b2ebab7c",
                path: "000100380007",
                name: "港区储配站",
                location: 221,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1616750943296,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1616750943296,
                delFlag: false,
                label: "港区储配站"
              },
              {
                id: "0b43720a26d449408293d836f7bb0817",
                parentId: "0fc809f5f90b40fbb0f7b253b2ebab7c",
                path: "000100380008",
                name: "综合办公室",
                location: 222,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916174622,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916174622,
                delFlag: false,
                label: "综合办公室"
              },
              {
                id: "679c23197c1746f5989511b5ceeb75a1",
                parentId: "0fc809f5f90b40fbb0f7b253b2ebab7c",
                path: "000100380009",
                name: "企管财务科",
                location: 223,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916179583,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916179583,
                delFlag: false,
                label: "企管财务科"
              },
              {
                id: "22be3116a1b749218f59dbec61a13828",
                parentId: "0fc809f5f90b40fbb0f7b253b2ebab7c",
                path: "000100380010",
                name: "安全生产科",
                location: 224,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916186984,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916186984,
                delFlag: false,
                label: "安全生产科"
              },
              {
                id: "20de61cf2bba48899b76737101b9676a",
                parentId: "0fc809f5f90b40fbb0f7b253b2ebab7c",
                path: "000100380011",
                name: "班组成员",
                location: 225,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621916383607,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621916383607,
                delFlag: false,
                label: "班组成员"
              }
            ]
          },
          {
            id: "42d65c22fa914a799b628dd35fa6abe6",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010039",
            name: "高层",
            location: 226,
            hasChildren: false,
            item: {
              value: "department",
              text: "部门"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1620459789585,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1620459789585,
            delFlag: false,
            label: "高层"
          },
          {
            id: "3ed09b131a8e4e5b9c8bdd475f9c80fc",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010040",
            name: "外埠公司",
            location: 227,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1621917620185,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1621917620185,
            delFlag: false,
            label: "外埠公司",
            children: [
              {
                id: "8aa68f7489a84947ba5f89208be5c64f",
                parentId: "3ed09b131a8e4e5b9c8bdd475f9c80fc",
                path: "000100400001",
                name: "一公司波纹管安装队",
                location: 228,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621917750128,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621917750128,
                delFlag: false,
                label: "一公司波纹管安装队"
              },
              {
                id: "4e7def29f9d64251a98379562b614cb4",
                parentId: "3ed09b131a8e4e5b9c8bdd475f9c80fc",
                path: "000100400002",
                name: "二公司波纹管安装队",
                location: 229,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621917760603,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621917760603,
                delFlag: false,
                label: "二公司波纹管安装队"
              },
              {
                id: "df314b2730a846c4b6ca4e5e444e97ae",
                parentId: "3ed09b131a8e4e5b9c8bdd475f9c80fc",
                path: "000100400003",
                name: "三公司波纹管安装队",
                location: 230,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621917771492,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621917771492,
                delFlag: false,
                label: "三公司波纹管安装队"
              },
              {
                id: "f00dac3c28e94c248c93649c7f992557",
                parentId: "3ed09b131a8e4e5b9c8bdd475f9c80fc",
                path: "000100400004",
                name: "丰润公司波纹管安装队",
                location: 231,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1621917792504,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1621917792504,
                delFlag: false,
                label: "丰润公司波纹管安装队"
              },
              {
                id: "4a74efc986ab494fbfb8fcb660a977d1",
                parentId: "3ed09b131a8e4e5b9c8bdd475f9c80fc",
                path: "000100400005",
                name: "管网公司波纹管安装队",
                location: 232,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1622187279429,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1622187279429,
                delFlag: false,
                label: "管网公司波纹管安装队"
              }
            ]
          },
          {
            id: "d5ea210387bf45a097fd96cfe5b367d0",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010041",
            name: "一公司",
            location: 233,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1628396094722,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1628396094722,
            delFlag: false,
            label: "一公司",
            children: [
              {
                id: "c6fdc3204da54031aae7ed36624e2439",
                parentId: "d5ea210387bf45a097fd96cfe5b367d0",
                path: "000100410001",
                name: "龙西",
                location: 234,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1628396111606,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1628396111606,
                delFlag: false,
                label: "龙西"
              },
              {
                id: "b751144ec64c4289b88ffc12704edeb8",
                parentId: "d5ea210387bf45a097fd96cfe5b367d0",
                path: "000100410002",
                name: "市场开发科",
                location: 235,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1635760985894,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1635760985894,
                delFlag: false,
                label: "市场开发科"
              },
              {
                id: "b5c4eb56840845b4ac5a77aaacae7411",
                parentId: "d5ea210387bf45a097fd96cfe5b367d0",
                path: "000100410003",
                name: "安全生产科",
                location: 236,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1635761005947,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1635761005947,
                delFlag: false,
                label: "安全生产科"
              }
            ]
          },
          {
            id: "1290754631ac43adafdba635d073f8e6",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010043",
            name: "二公司",
            location: 237,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1635763429369,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1635763429369,
            delFlag: false,
            label: "二公司",
            children: [
              {
                id: "e1cdf654fd96425582b52eb36c3e3ab8",
                parentId: "1290754631ac43adafdba635d073f8e6",
                path: "000100430001",
                name: "陶瓷",
                location: 238,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: false,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1635763513431,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1635763513431,
                delFlag: false,
                label: "陶瓷"
              },
              {
                id: "d4005066027649369afdc58e9ec0eda4",
                parentId: "1290754631ac43adafdba635d073f8e6",
                path: "000100430002",
                name: "瓷器",
                location: 241,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1635818100548,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1635818100548,
                delFlag: false,
                label: "瓷器"
              }
            ]
          },
          {
            id: "c2c28ed1479240f5b4b63ff819ec18e4",
            parentId: "6a0ccd5595fb4631a714765e26a71df8",
            path: "00010044",
            name: "三公司",
            location: 239,
            hasChildren: true,
            item: {
              value: "sub_company",
              text: "分公司"
            },
            memberCount: 0,
            status: {
              value: 0,
              text: "启用"
            },
            tag: false,
            createdBy: "99bc81e2c674418391fedd439d457799",
            createdAt: 1635817876376,
            updatedBy: "99bc81e2c674418391fedd439d457799",
            updatedAt: 1635817876376,
            delFlag: false,
            label: "三公司",
            children: [
              {
                id: "30a1f3476a86454cb268d3f3c0a4e756",
                parentId: "c2c28ed1479240f5b4b63ff819ec18e4",
                path: "000100440001",
                name: "火器",
                location: 240,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1635818032639,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1635818032639,
                delFlag: false,
                label: "火器"
              },
              {
                id: "f689099f6d8a434a9b65d894b65f1519",
                parentId: "c2c28ed1479240f5b4b63ff819ec18e4",
                path: "000100440002",
                name: "服务所1",
                location: 242,
                hasChildren: false,
                item: {
                  value: "department",
                  text: "部门"
                },
                memberCount: 0,
                status: {
                  value: 0,
                  text: "启用"
                },
                tag: true,
                createdBy: "99bc81e2c674418391fedd439d457799",
                createdAt: 1637656700419,
                updatedBy: "99bc81e2c674418391fedd439d457799",
                updatedAt: 1637656700419,
                delFlag: false,
                label: "服务所1"
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
/* 加 important */
.basic {
  overflow-x: auto !important;
  overflow-y: hidden !important;
  height: 500px !important;
}
</style>
