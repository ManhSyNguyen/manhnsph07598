import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import DetailProduct from '../pages/views/Admin/DetailProduct';
import AddProduct from '../pages/views/Admin/AddProduct';
import Category from '../pages/views/Admin/Category';
import Post from '../pages/views/Admin/Post';
import AddCategory from '../pages/views/Admin/AddCategory';
import Categorys from '../pages/views/Main/Categorys';
import AddPost from '../pages/views/Admin/AddPost';
//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Introduce from '../pages/views/Main/Introduce';
import Contact from '../pages/views/Main/Contact';
import EditProduct from '../pages/views/Admin/EditProduct';

import ProductDetail from '../pages/views/Main/ProductDetail';
import Postt from '../pages/views/Main/Post';

const Routers = ({ products, onRemove, onAdd, onUpdate, posts, onRemoveP, onAddP, categorys, onRemovect, onAddCt }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleAdd = (id) => {
        onAdd(id)
    }
    const onHandleRemoveCt = (id) => {
        onRemovect(id);
    }
    const onHandleAddCt = (id) => {
        onAddCt(id)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            {/* product */}
                            <Route path='/admin' exact>
                                <Dashboard products={products} categorys={categorys} posts={posts} />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} categorys={categorys} onRemove={onHandleRemove} />
                            </Route>
                            <Route path="/admin/product/add" >
                                <AddProduct categorys={categorys} onAdd={onHandleAdd} />
                            </Route>
                            <Route path="/admin/edit/:id" >
                                <EditProduct products={products} categorys={categorys} onUpdate={onUpdate} />
                            </Route>
                            <Route path="/admin/detail/:id" >
                                <DetailProduct products={products} />
                            </Route>
                            {/* post */}
                            <Route path='/admin/posts'>
                                <Post posts={posts} onRemoveP={onRemoveP} />
                            </Route>
                            <Route path='/admin/post/add'>
                                <AddPost onAddP={onAddP} />
                            </Route>
                            {/* category */}
                            <Route path='/admin/categorys'>
                                <Category categorys={categorys} onRemovect={onHandleRemoveCt} />
                            </Route>
                            <Route path='/admin/category/add'>
                                <AddCategory onAddCt={onHandleAddCt} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>

                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>

                            <Route path="/about">
                                <About products={products} categorys={categorys} />
                            </Route>
                            <Route path="/product/:id" exact>
                                <ProductDetail products={products} />
                            </Route>
                            <Route path="/gioithieu">
                                <Introduce />
                            </Route>
                            <Route path="/lienhe">
                                <Contact />
                            </Route>
                            <Route path="/cate/:id">
                                <Categorys categorys={categorys} products={products} />
                            </Route>
                            <Route path="/baiviet">
                                <Postt posts={posts} />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
