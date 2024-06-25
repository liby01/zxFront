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
export const UpdateBrand = (brand) => {
  return request({
    url: `${api_name}/update`,
    method: 'put',
    data: brand,
  });
};

//用户删除
export const DeleteBrand = (id) =>{
  return request({
    // ``模板字符串
    url: `${api_name}/deleteById/${id}`, //路径
    method: 'delete' //提交方式
  })
}

// 查询所有的品牌数据
export const FindAllBrand = () => {
  return request({
    url: `${api_name}/findAll`,
    method: 'get',
  })
}