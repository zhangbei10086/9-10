import Mock from 'mockjs'
Mock.mock('getdata',{
    status:"200",
    "list|10":[
        {
            "id|+1":1,
            "title":"@ctitle",
            "paragraph":"paragraph(1)",
            "num|100-2000":100,
        }
    ]
})