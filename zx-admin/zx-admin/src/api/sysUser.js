import request from '@/utils/request'

const base_api = '/admin/system/sysUser'

// 用户列表
export const GetSysUserListByPage = (pageNum,pageSize,sysUserDto) => {
  return request({
    // ``模板字符串
    url: `${base_api}/findByPage/${pageNum}/${pageSize}`, //路径
    method: 'get', //提交方式
    // 接口@RequestBody 前端 data : 名称，以json格式传输
    // 接口没有注解 ， 前端 params: 名称
    params: sysUserDto, //其他参数
  })
}

//用户添加
export const SaveSysUser = (sysUser) =>{
  return request({
    // ``模板字符串
    url: `${base_api}/saveSysUser`, //路径
    method: 'post', //提交方式
    data: sysUser, //其他参数
  })
}

//用户修改
export const UpdateSysUser = (sysUser) =>{
  return request({
    // ``模板字符串
    url: `${base_api}/updateSysUser`, //路径
    method: 'put', //提交方式
    data: sysUser, //其他参数
  })
}

//用户删除
export const DeleteSysUser = (userId) =>{
  return request({
    // ``模板字符串
    url: `${base_api}/deleteById/${userId}`, //路径
    method: 'delete' //提交方式
  })
}