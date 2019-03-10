class FearChart {
    constructor(container) {
        this.container = container;
        this.labels = ['Junior', 'Middle', 'Senior', 'Teamlead', 'Manager', ''];
        container.innerHtml = "";
        this.fear_chart = Chartist.Line(container, {
            labels: this.labels,
        }, {
            low: 0,
            high: 10,
            showArea: true,
            chartPadding: 20,
            showPoint: true,
            fullWidth: true,
            axisY: {
                onlyInteger: true
            },
        });
    }

    update(data) {
        Object.assign(data, {labels: this.labels});
        this.fear_chart.update(data);
    }
}


