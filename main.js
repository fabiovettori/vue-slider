// Vue app
var app = new Vue({
    el: '#root',
    data: {
        contatore : 3,
        index_slider: 0,
        img_slider: [
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/05d9bd87-195d-49d1-9e99-be7dae039ff8/scarpa-blazer-low-JtblVl.jpg', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/151e7f41-dbe3-42b3-8bc4-162280c4d7e6/scarpa-blazer-low-JtblVl.jpg', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b4c42794-faa6-4943-8ef2-1020a73a9b95/scarpa-blazer-low-JtblVl.jpg', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aef6f3ff-2bf4-454f-b3fa-4422ace17a92/scarpa-blazer-low-JtblVl.jpg'
        ],
        clock: '',
    },

    created: function() {
        this.timer();
    },

    methods: {
        next: function () {
            if (this.index_slider < this.img_slider.length - 1) {
                this.index_slider += 1;
            } else {
                this.index_slider = 0;
            }
            this.contatore = 3;
            console.log(this.contatore);
        },

        prev: function () {
            if (this.index_slider > 0) {
                this.index_slider -= 1;
            }
            else {
                this.index_slider = this.img_slider.length - 1;
            }
            this.contatore = 3;
            console.log(this.contatore);
        },

        mark: function (i) {
            this.index_slider = i;
        },

        timer: function () {

            this.clock = setInterval(function(){

                app.contatore -= 1;
                console.log(app.contatore);

                if (app.contatore == 0) {
                    app.next();
                }

            }, 1000);
        },

        playerSlider: function(){
                app.timer();
                console.log('play');
        },

        stopSlider: function(){
                clearInterval(this.clock);
                console.log('stop');
        }

    }
});
