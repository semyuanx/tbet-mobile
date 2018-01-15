import React from 'react';
import { WingBlank, WhiteSpace, Radio, Flex, ImagePicker } from 'antd-mobile';
const RadioItem = Radio.RadioItem;
class HanldPay extends React.Component {
    state = {
        files: [],
    }
    onChange = (e,files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
        return ;
    }
    render() {
        const { files } = this.state;
        return (
            <div className="hanldpay-container">
                <WhiteSpace size="sm" />
                <div className="pay-title p15">
                    <svg className="tbet-icon am-icon-md" aria-hidden="true">
                        <use xlinkHref="#icon-yinxing"></use>
                    </svg>
                    <h3>请选择收款银行</h3>
                </div>
                <WhiteSpace size="sm" />
                <div className="pay-radio m15">
                    <Flex>
                        <Flex.Item>
                            <RadioItem className="my-radio" onChange={(e) => {console.log('checkbox', e)}}>Agree</RadioItem>
                        </Flex.Item>
                        <Flex.Item>
                            <RadioItem className="my-radio" onChange={e => console.log('checkbox', e)}>Agree</RadioItem>
                        </Flex.Item>
                        <Flex.Item>
                            <RadioItem className="my-radio" onChange={e => console.log('checkbox', e)}>Agree</RadioItem>
                        </Flex.Item>
                    </Flex>

                </div>
                <WhiteSpace size="sm" />
                <div className="pay-title p15">
                    <svg className="tbet-icon am-icon-md" aria-hidden="true">
                        <use xlinkHref="#icon-chongzhi"></use>
                    </svg>
                    <h3>请填写汇款金额</h3>
                </div>
                <WingBlank>
                    <p className="pay-txt"><span>*</span>存款最低限额100元，可享受0.5%的手续费返还</p>
                    <p className="pay-txt"><span>*</span>存款金额最好不要为整数，方便财务识别</p>
                </WingBlank>
                <div>
                    <ImagePicker
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 5}
                    />
                </div>
            </div>
        )
    }
}


export default HanldPay;