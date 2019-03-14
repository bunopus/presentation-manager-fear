class PopularityChart {
    constructor(container, data) {
        this.container = container;
        container.innerHtml = "";
        this.labels = ['NonTech', 'Tech'];
        this.popularityChart = Chartist.Bar(container, {
            labels: this.labels,
            series: [data.nontech, data.tech]
        }, {
            low: 0,
            showArea: true,
            chartPadding: 20,
            distributeSeries: true,
            fullWidth: true,
            axisY: {
                onlyInteger: true
            },
        });
        this.popularityChart.on('draw', function (data) {
            if (data.type === 'bar') {
                data.element.animate({
                    y2: {
                        begin: 600,
                        dur: '0.5s',
                        from: data.y1,
                        to: data.y2
                    }
                });
            }
        });
        this.popularityChartVisible = true;
    }

    set isVisible(visibility) {
        this.popularityChartVisible = visibility;
    }

    update(data) {
        if (this.popularityChartVisible) {
            let obj = {series: [data.nontech, data.tech], labels: this.labels};
            this.popularityChart.update(obj);
        }
    }
}


