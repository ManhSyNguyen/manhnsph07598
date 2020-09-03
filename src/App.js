import React, { useState, useEffect } from 'react';

import apiRequest from './api/productApi';
import apiRequestPost from './api/postApi';
import apiRequestCt from './api/categoryApi';
import Routers from './routers'


function App() {

  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [categorys, setCategorys] = useState([]);

  //Hien thi danh sach san pham
  //product
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  }, []);

  //posts
  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await apiRequestPost.getAll();
        setPosts(data);

      } catch (error) {
        console.log(error)
      }
    }
    getPost();
  }, [])
  //category

  useEffect(() => {
    const getCategorys = async () => {
      try {
        const { data } = await apiRequestCt.getAll();
        setCategorys(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCategorys()
  }, [])

  //productRemove
  const onHandleRemove = async (id) => {
    try {
      const newProducts = products.filter(product => product.id !== id);
      apiRequest.remove(id);

      const confirm = window.confirm("Bạn có muốn xóa ?");
      if (confirm) {
        setProducts(newProducts);
      }
    } catch (error) {
      console.log(error)
    }
  }
  //postRemove
  const onHandleRemovePost = async (id) => {
    try {
      const newPosts = posts.filter(post => post.id !== id);
      apiRequestPost.remove(id);
      const confirm = window.confirm("Bạn có muốn xóa ?");
      if (confirm) {
        setPosts(newPosts);
      }
    } catch (error) {
      console.log(error)
    }
  }

  //categoryRemove
  const onHandleRemoveCt = async (id) => {
    try {
      const newCategorys = categorys.filter(category => category.id !== id);
      apiRequestCt.remove(id);

      const confirm = window.confirm("Bạn có muốn xóa ?");
      if (confirm) {
        setCategorys(newCategorys);
      }
    } catch (error) {
      console.log(error)
    }
  }


  //productAdd
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      const confirmAdd = window.confirm("Bạn có muốn thêm sản phẩm!");
      if (data, confirmAdd) {
        setProducts([...products, data]);
      }

    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  //postadd

  const onHandleAddP = async (post) => {
    try {
      const { data } = await apiRequestPost.create(post);
      const confirmAdd = window.confirm("Bạn có muốn thêm bài viết!");
      if (data, confirmAdd) {
        setPosts([...posts, data]);
      }
    } catch (error) {
      console.log(error)
    }
  }
  //catgoryAdd

  const onHandleAddCt = async (category) => {
    try {
      const { data } = await apiRequestCt.create(category);
      const confirmAdd = window.confirm("Bạn có muốn thêm danh mục!");
      if (data, confirmAdd) {
        setCategorys([...categorys, data]);
      }

    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


  const onHandleUpdate = async (updateProduct) => {
    try {
      apiRequest.update(updateProduct.id, updateProduct);
      const newProducts = products.map(product => (
        product.id === updateProduct.id ? updateProduct : product
      ));

      setProducts(newProducts);
    } catch (error) {
      console.log(error)
    }

  }



  return (
    <div className="App">
      <Routers
        //product
        products={products}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onUpdate={onHandleUpdate}
        //post
        posts={posts}
        onRemoveP={onHandleRemovePost}
        onAddP={onHandleAddP}
        //category
        categorys={categorys}
        onRemovect={onHandleRemoveCt}
        onAddCt={onHandleAddCt}

      />

    </div>
  )

}
export default App;