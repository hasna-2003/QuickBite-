import React from 'react';
import {assets} from '../../assets/assets';
import { useState, useEffect } from 'react';

const AddFood = () => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: '',                        //properties
        description: '',
        category: 'Select a category',
        price: ''
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]: value}));
    }

    const onSubmitHandler = async(event) => {
        event.preventDefault();
        if (!image) {
             toast.error("Please select an image");
             return;
        }
        try {
           await addFood(data, image);
           toast.success('Food added successfully');
           setData ({name: '', description: '', category: 'Select a category', price: ''});
           setImage(null);
        } catch (error) {
            toast.error('Failed to add food');
        }
    }
    

  return (
   <div className="mx-2 mt-3">
        <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12">
                <div className="card shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Add Food</h2>
                        <form onSubmit={onSubmitHandler}>

                            
                               <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" width={98} />
                                </label>
                                <input 
                                    type="file" 
                                    className="form-control" 
                                    id="image" 
                                    required hidden onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    placeholder="Enter food name" 
                                    required 
                                    name="name"
                                    value={data.name}
                                    onChange={onChangeHandler}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea 
                                    className="form-control" 
                                    id="description" rows="3"
                                    placeholder="Enter food description" 
                                    name ="description"
                                    required onChange={onChangeHandler}
                                    value={data.description}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <select name="category" id="category" className="form-select" required onChange={onChangeHandler} value={data.category}> 
                                   
                                         <option value="">Select a category</option>
                  <option value="Biriyani">Biriyani</option>
                  <option value="Fries">Fries</option>
                  <option value="Bread">Bread</option>
                  <option value="Rice">Rice & Curry</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Rolls">Rolls</option>
                  <option value="IceCream">Ice Cream</option>
                  <option value="Hoppers">String Hoppers</option>
                  <option value="Sushi">Sushi</option>
                                </select>
                            </div>
                              <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="price" 
                                    placeholder="Enter food price" 
                                    name="price"
                                    required onChange={onChangeHandler}
                                    value={data.price}
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-lg">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFood;
