import request from '@/utils/request'

const api_name = '/admin/product/brand'

// 分页列表
export const GetBrandPageList = (page, limit) => {
  return request({
    url: `${api_name}/${page}/${limit}`,
    method: 'get'
  })
}


// 保存品牌
export const SaveBrand = brand => {
    return request({
        url: `${api_name}/save`,
        method: 'post',
        data: brand,
    })
}

// 修改品牌
export const UpdateBrand = (brand) =>{
  return request({
    // ``模板字符串
    url: `${api_name}/update`, //路径
    method: 'put', //提交方式
    data: brand, //其他参数
  })
}