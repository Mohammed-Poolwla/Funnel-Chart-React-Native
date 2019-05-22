import React, {PureComponent} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const dataColor = ['#84C9F2', '#40AAE0', '#047EBF', '#0462A4', '#044284'];
/*
    data = [
        {
            label:Enquiry (100),
            value: 100
        }
    ]
*/

export default class EiFunnelChart extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { chartData, width = 300, chartHight = 265, chartwidth = 212 } = this.props;
        const totalChartValue = chartData.reduce((prev, cur) => prev + cur.value, 0);
        const getHeightPer = (val) => ((val / totalChartValue) * 100);
        const getColHeight = (val) => ((getHeightPer(val) * chartHight) / 100);

        return (
            <View style={[style.funnelWrapper, { width: width }]}>
                <View style={style.funnelTextCols}>
                    {chartData.map((item, index) => {
                        return (
                            <View key={`EiFunnelChartValue-${index}`} style={[style.funnelTextCol, { height: getColHeight(item.value) }]}>
                                <Text style={{ fontSize: 10 }}>{item.label}</Text>
                            </View>
                        )
                    })}
                </View>
                <View style={style.funnelImageWrapper}>
                    <View style={style.funnelBGWrapper}>
                        {chartData.map((item, index) => {
                            return (<View key={`EiFunnelChartValue-${index}`} style={{ height: getColHeight(item.value), backgroundColor: dataColor[index], }} />)
                        })}
                    </View>
                    <Image source={require('./funnel.png')} style={{ width: chartwidth, height: chartHight }} autoResize={false} />
                    <View style={style.funnelBGWrapper}>
                        {chartData.map((item, index) => {
                            return (
                                <View key={`EiFunnelChartValue-${index}`} style={[style.funnelPointsWrapper, { height: getColHeight(item.value) }]}>
                                    <View style={[style.funnelPoints, { width: chartwidth / 2 }]} />
                                </View>
                            )
                        })}
                    </View>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    funnelWrapper: { flexDirection: 'row', justifyContent: 'space-between', },
    funnelTextCols: { flexDirection: 'column', flex: 1, paddingRight: 10 },
    funnelTextCol: { flexDirection: 'row', justifyContent: 'flex-end', flexWrap: 'nowrap', alignItems: 'center' },
    funnelImageWrapper: { position: 'relative' },
    funnelBGWrapper: { flexDirection: 'column', position: 'absolute', left: 0, right: 0, bottom: 0, top: 0 },
    funnelPointsWrapper: { position: 'relative', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'nowrap', alignItems: 'center' },
    funnelPoints: { borderBottomWidth: 1, borderStyle: 'dashed', borderBottomColor: '#707070' }
});