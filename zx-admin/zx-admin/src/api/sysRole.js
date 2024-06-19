import request from '@/utils/request'
import SysRole from '@/views/system/sysRole.vue'

const base_api = '/admin/system/sysRole'
// 角色列表
export const GetSysRoleListByPage = (current,limit,queryDto) => {
    return request({
      url: `${base_api}/findByPage/${current}/${limit}`,
      method: 'post',
      data: queryDto,
    })
}

//角色添加
export const SaveSysRole = (SysRole) =>{
    return request({
      url: `${base_api}/saveSysRole`,
      method: 'post',
      data: SysRole,
    })
}

//角色修改
export const UpdateSysRole = (SysRole) =>{
  return request({
    url: `${base_api}/updateSysRole`,
    method: 'put',
    data: SysRole,
  })
}

//角色删除
export const DeleteSysRole = (roleId) =>{
  return request({
    // ``模板字符串
    url: `${base_api}/deleteById/${roleId}`, //路径
    method: 'delete' //提交方式
  })
}