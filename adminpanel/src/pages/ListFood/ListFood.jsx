import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import listFood from './ListFood.css';

const ListFood = () => {
  const [List , setList] = useState([]);
  const fetchList = async() => {
  try{
    const data = await getFoodList();
    setList(data);
  } catch (error) {
    toast.error('Failed to fetch food list');
  }
  }

  const removeFood = async(foodId) => {
    try {
      const success = await deleteFood(foodId);
      if (success) {
        toast.success('Food item deleted successfully');
        fetchList();   //refresh the list after deletion 
      } else {
        toast.error('Failed to delete food item');
      }
       } catch (error) {
         toast.error('Failed to delete food item');
     }
  }
  
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="py-5 row justify-content-center">
      <div classname="col-11 card">
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
               List.map((item, index) => {
                return (
                <tr key={index}>
                 <td>
                   <img src={item.image} alt={item.name} height={48} width={48} />
                 </td>
                  <td>{item.name}</td>
                   <td>{item.category}</td>
                   <td>Rs.{item.price.toFixed(2)}</td>
                <td className='text-danger'>
                <i className='bi bi-x-circle-fill' onClick={() => removeFood(item.id)}>
                </i>
                </td>
              </tr>
            )
           })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListFood;
