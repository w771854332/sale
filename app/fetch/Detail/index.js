import { get } from './../get.js';
import { submitData, post } from './../post.js';

export function getListData(id,search){
    const s1 = search ? search : '',
          i1 = id ? id : -1;
    let result;
    if(__DEV__)
       result = get(`/api/sell/goods/list_goods`);
    else
       result = get(`/index.php/goods/list_goods?search=${s1}&id=${i1}`);
    return result;
}

export function upload(data){
    let result;
    if(__DEV__)
        result = submitData(`/api/sell/goods/picture_upd`);
    else
        result = submitData('/index.php/goods/picture_upd',data);
    return result;
}


export function submit(data){
    let result;
    if(__DEV__)
        result = post(`/api/sell/goods/picture_upd`);
    else
        result = post('/index.php/goods/sell_ope',data);
    return result;
}


export function getGoodsInfo(id){
    let result;
    if(__DEV__)
        result = get(`/api/sell/goods/detail`);
    else
        result = get(`/index.php/goods/detail?id=${id}`);
    return result;
}