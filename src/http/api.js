// 用来封装所有的请求
import service from './index'

export default {
    //  所有方法必须 return 
    // 获取注册数据
    getRegister(userName, passWord) {
        return service.put('/managerUserRegister', {
            userName,
            passWord
        })
    },
    // 获取登录数据
    getLogin(userName, passWord) {
        return service.post('/login', {
            userName,
            passWord
        })
    },
}