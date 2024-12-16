import React from "react";
import {
  HeartFilled,
  HeartOutlined,
  EditOutlined,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const Card = (props) => {
  return (
    <div
      className="border-[1.5px] border-gray-200 w-[350px] h-[409px] mt-[10px] mb-[15px] ml-[20px] bg-white overflow-hidden"
      key={props.user.id}
    >
      <img
        className="w-full h-52 bg-gray-100"
        src={`https://avatars.dicebear.com/v2/avataaars/${props.user.username}.svg?options[mood][]=happy`}
        alt={props.user.username}
      />
      <div className="p-[24px] ">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 text-left">
          {props.user.name}
        </h2>
        <div className="flex items-center mb-2">
          <MailOutlined className="text-lg text-gray-600 mr-2" />
          <p className="text-gray-700 text-sm">{props.user.email}</p>
        </div>
        <div className="flex items-center mb-2">
          <PhoneOutlined className="text-lg text-gray-600 mr-2" />
          <p className="text-gray-700 text-sm">{props.user.phone}</p>
        </div>
        <div className="flex items-center">
          <GlobalOutlined className="text-lg text-gray-600 mr-2" />
          <p className="text-gray-700 text-sm">{props.user.website}</p>
        </div>
      </div>
      <div className="flex justify-around pt-[10px] border-t border-gray-200 bg-gray-100 pb-[18px]">
        {props.user.liked ? (
          <HeartFilled
            className="text-red-500 text-xl cursor-pointer border-r-2"
            onClick={() => props.handleLike(props.user.id)}
          />
        ) : (
          <HeartOutlined
            className="text-red-500 text-xl cursor-pointer "
            onClick={() => props.handleLike(props.user.id)}
          />
        )}
        <EditOutlined
          className="text-gray-600 text-xl cursor-pointer"
          onClick={() => props.handleEdit(props.user)}
        />
        <DeleteFilled
          className="text-gray-600 text-xl cursor-pointer"
          onClick={() => props.handleDelete(props.user.id)}
        />
      </div>
    </div>
  );
};

export default Card;
