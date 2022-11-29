const myMixin = {
    mounted() {
        const img = document.querySelector('img')
        img.ondragstart = () => {
            return false;
        };
    },
    data() {
        return {
            menus: [
                {
                    name: 'Home',
                    link: '/',
                },
                {
                    name: 'Courses',
                    link: '/course.html',
                }
            ]
        }
    }
}
