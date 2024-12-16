import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Modal, Form, Input } from "antd";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editUserData, setEditUserData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      const usersWithLikes = data.map((user) => ({ ...user, liked: false }));
      setUsers(usersWithLikes);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to delete a user
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // Function to like/unlike a user
  const handleLike = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, liked: !user.liked } : user
    );
    setUsers(updatedUsers);
  };

  // Function to edit user
  const handleEdit = (user) => {
    setEditUserData(user);
    setIsModalVisible(true);
    form.setFieldsValue(user); // Populate form fields with the user's data
  };

  // Save updated user information
  const handleSave = () => {
    form.validateFields()
      .then((values) => {
        const updatedUsers = users.map((user) =>
          user.id === editUserData.id ? { ...user, ...values } : user
        );
        setUsers(updatedUsers);
        setIsModalVisible(false);
        setEditUserData(null);
      })
      .catch((errorInfo) => {
        console.error("Validation Failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditUserData(null);
  };

  return (
    <div>
      {loading ? (
        <div className="dots mx-auto"></div>
      ) : (
        <div className="flex flex-wrap justify-start items-start">
          {users.map((user) => (
            <Card
              key={user.id}
              user={user}
              handleDelete={handleDelete}
              handleLike={handleLike}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      )}

      {isModalVisible && (
        <Modal 
          title="Basic Modal"
          open={isModalVisible}
          onOk={handleSave}
          onCancel={handleCancel}
        >
                <hr></hr>
                <br></br>
          <Form form={form} layout="horizontal" className="ml-[85px] mt-[10px]">
                
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true},
                { type: "email" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="website"
              label="Website"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Form>
          <br></br>
          <hr></hr>
        </Modal>
      )}
    </div>
  );
};

export default Cards;
