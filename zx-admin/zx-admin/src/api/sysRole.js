import request from '@/utils/request'

const base_api = '/admin/system/sysRole'
// 角色列表
export const GetSysRoleListByPage = (current,limit,queryDto) => {
    return request({
      url: `${base_api}/findByPage/${current}/${limit}`,
      method: 'post',
      data: queryDto,
    })
  }