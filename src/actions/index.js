import types from './types';
import todoData from '../helper/dummy_data';

export function getAll(){
    return{
        type: types.GET_ALL,
        payload: todoData

    }
}