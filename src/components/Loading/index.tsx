import { Spin } from "antd";

interface ILoading {
  isFull?: boolean;
}

const Loading = ({ isFull }: ILoading) => {
  return <Spin fullscreen={isFull} />;
};

export default Loading;
