import request from '@/utils/request'

const api_name = '/admin/product/categoryBrand'

// 分页列表
export const GetCategoryBrandPageList = (page, limit, searchObj) => {
    return request({
        url: `${api_name}/${page}/${limit}`,
        method: 'get',
        params: searchObj,
    })
}

// 保存信息
export const SaveCategoryBrand = categoryBrand => {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: categoryBrand,
    })
}

// 修改信息
export const UpdateCategoryBrand = categoryBrand => {
  return request({
    url: `${api_name}/updateById`,
    method: 'put',
    data: categoryBrand,
  })
}

// 删除信息
export const DeleteCategoryBrand = (id) => {
  return request({
    url: `${api_name}/deleteById/${id}`, // 路径
    method: 'delete' // 提交方式
  });
}

// // 根据分类的id获取品牌数据
// export const FindBrandByCategoryId = categoryId => {
//     return request({
//       url: `${api_name}/findBrandByCategoryId/${categoryId}`,
//       method: 'get',
//     })
// }

//
// export function getCategoryBrands() {
//     return request({
//       url: '/api/category/brands',
//       method: 'get',
//     });
// }