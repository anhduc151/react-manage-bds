import React, { Component } from 'react'
import '../../assets/style/site.css'
import '../../component/Navbar2/navbar2.css'



export default class Container extends Component {
  render() {
    return (
        <div className="span3">
        <div className="well sidebar-nav">
          <ul className="nav nav-list">
            <li className="nav-header"><i className="bx bxs-home" /> Trang chủ</li>
            <li className="active"><a href="index.html">Thông tin trang chủ</a></li>
            <li className="nav-header"><i className="bx bxs-building" /> Quản lý sản phẩm</li>
            <li><a href="menu1/product/add.html">Thêm sản phẩm</a></li>
            <li><a href="menu1/product/edit.html">Sửa sản phẩm</a></li>
            <li><a href="menu1/product/remove.html">Xoá sản phẩm</a></li>
            <li className="nav-header"><i className="bx bxs-user-circle" /> Quản lý user</li>
            <li><a href="menu1/user/addUser.html">Thêm tài khoản user</a></li>
            <li><a href="menu1/user/removeUser.html">Xoá tài khoản user</a></li>
            <li className="nav-header"><i className="bx bxs-bar-chart-alt-2" /> Quản lý doanh thu</li>
            <li><a href="menu1/revenue/statistical.html">Thống kê doanh thu</a></li>
            <li className="nav-header"><i className="bx bxs-food-menu" /> Quản lý đơn hàng</li>
            <li><a href="menu1/shipment/adduserShipment.html">Thêm người dùng</a></li>
            <li><a href="menu1/shipment/queryShipment.html">Truy vấn người dùng</a></li>
            <li className="nav-header"><i className="bx bxs-help-circle" /> Hỗ trợ khách hàng</li>
            <li><a href="menu1/help/helpUser.html">Đánh giá và yêu cầu của khách hàng</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
