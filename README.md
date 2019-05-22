# Funnel-Chart-React-Native
This Funnel Chart is created in React Native component

## Getting started
Put the "funnelChart" folder in your components directry and import from them.

## Usage
```javascript
import  EiFunnelChart  from '../components/funnelChart';
const data = [
        {
            label: 'Enquiry (100)',
            value: 100
        },
        {
            label: 'Business Process (86)',
            value: 86
        },
        {
            label: 'Confirmation (177)',
            value: 177
        },
        {
            label: 'Finance Awaited (47)',
            value: 47
        },
        {
            label: 'Finance Cleared (46)',
            value: 46
        },
    ]
<EiFunnelChart
    chartData={data}
    chartHight={150}
    chartwidth={120}
    width={230}
/>
```

## Chart Image
![Screenshot](https://github.com/Mohammed-Poolwla/Funnel-Chart-React-Native/blob/master/funnel-image.png)
