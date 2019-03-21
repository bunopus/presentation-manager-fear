class SkillsChart {
    constructor(container, data) {
        this.container = container;
        container.innerHtml = "";

        this.labels = data.labels;
        this.skillsChart = new Chartist.Bar(container, {
            labels: this.labels,
            series: data.series
        }, {
            low: 0,  seriesBarDistance: 35,

            high: 10,
            showArea: true,
            chartPadding: 20,
            showPoint: true,
            fullWidth: true,
            axisY: {
                onlyInteger: true
            },
            plugins: [
                Chartist.plugins.legend({
                    legendNames: ['Другого чувака', 'Твои'],
                })
            ]
        });

        this.skillsChart.on('draw', function (data) {
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
    }


    update(data) {
        let obj = {series: data.series, labels: data.labels || this.labels};
        this.skillsChart.update(obj);
    }
}


