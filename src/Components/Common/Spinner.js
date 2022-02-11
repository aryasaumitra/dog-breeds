import { Spin, Space } from 'antd';

function SpinnerComponent(props){

    return <Space size="middle">
        <Spin size = {props.size}/>
    </Space>
}

export default SpinnerComponent