<template>
    <div class="footer--container">
        <div class="footer--bottom">
            <div class="container--bottom">
                <div><p>© MyYoutube Etna, 2022</p></div>
                <div class="bottom--rs">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer--container {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-image: url(../pages/images/header.jpg);
    background-size: cover;
}
.footer--top, .footer--bottom {
    color: white;
}
.footer--top .brand {
    font-size: 2rem;
}
.footer--top {
    background-color: rgb(80, 152, 248);
}
.footer--top a {
    color: white;
    text-decoration: none;
    padding-bottom: 10px;
}
.footer--top a:last-of-type {
    padding-bottom: 0;
}
.footer--top a:hover {
    text-decoration: underline;
}
.container--top, .container--bottom {
    max-width: 1200px;
    margin: auto;
}
.container--top {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
}
.container--top .top--col {
    display: flex;
    flex-direction: column;
}
.container--bottom {
    padding: 20px 0;
    text-align: center;
}
.bottom--rs a {
    display: inline-block;
    text-decoration: none;
    color: white;
    padding: 0 10px;
    transition: all .2s;
}
.bottom--rs a:hover {
    transform: translateY(-2px);
}
p{
    text-align: center;
}

</style>
