<template>
    <div class="container-modif-account">
        <div class="modif-account">
            <h1>Profil</h1>
        </div>
        <div class="container-account">
            <div class="container-title-account">
                <h2>Mon compte</h2>
            </div>
            <div class="account">
                <h4>Username</h4>
                <p>testest</p>
            </div>
            <div class="account">
                <h4>Pseudo</h4>
                <p>Test</p>
            </div>
            <div class="account">
                <h4>E-mail</h4>
                <p>Test@test</p>
            </div>
            <div class="account">
                <nuxt-link class="nav-link-account" to="/modifaccount"><button class="button">Changer mes informations</button>
                </nuxt-link>
            </div>
        </div>
        <div class="container-video">
            <div class="video_container">
                <h2>Mes videos</h2>
            </div>
            <div class="gridVideo">
                <section v-for="video in videos" class="video_section">
                    <article class="video_container">
                        <a href='#' class="thumbnail" data-duration={{ task.dueTime }}>
                            <img class="thumbnail_image"
                                src='https://blog.orsys.fr/les-carnets/wp-content/uploads/2021/06/Technologies_web-scaled-e1622616972782-1024x576.jpg' />
                        </a>
                        <div class="psion_header">
                            <div class="video_bottom_section">
                                <a href='#'>
                                </a>
                            </div>
                            <div class=video_description>
                                <a href='#' class="video_title">{{ video.name }}</a>
                                <a href='#' class="video_channel_name">{{ video.dueDate }}</a>
                                <div class="video_metadata">
                                    <span>12983 vues </span>
                                    &bull;
                                    <span>il y a 11 heures</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
            <button class="video-action--add">Ajouter une video</button>
            <button class="video-action--delete">Supprimer une video</button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            videos: [
                {
                    name: 'Prendre une douche',
                    dueDate: '6.5.2020',
                    dueTime: '12:00'
                },
                {
                    name: 'Coiffeur',
                    dueDate: '15.5.2020',
                    dueTime: '17:30'
                },
                {
                    name: 'Faire une lessive',
                    dueDate: '10.5.2020',
                    dueTime: '19:00'
                },
                {
                    name: 'Prendre une douche',
                    dueDate: '6.5.2020',
                    dueTime: '12:00'
                },
                {
                    name: 'Coiffeur',
                    dueDate: '15.5.2020',
                    dueTime: '17:30'
                },
                {
                    name: 'Faire une lessive',
                    dueDate: '10.5.2020',
                    dueTime: '19:00'
                },
            ]
        }
    },
}
</script>

<style scoped>
.modif-account {
    text-align: center;
    padding: 4rem;
}

.container-account {
    text-align: left;
}
.account {
    padding: 1rem;
}

.button {
  display: inline-block;
  border-radius: 10px;
  background-color: rgb(92, 0, 0);
  border: none;
  color: #FFFFFF;
  font-size: 15px;
  text-align: center;
  padding: 20px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  text-transform : uppercase;
}

.button:hover{
    background-color: red;
}

.video_section:first-child {
    border-top: none;
}

.gridVideo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 200px)); 
}

.video_section {
    gap: 3rem 1rem;
    padding: 3rem 0;
    margin: 0 1.5rem;
}

.video_container {
    display: flex;
    flex-direction: column;
}

.thumbnail {
    width: 360px;
    height: 200px;
    position: relative;
    display: flex;
}

.thumbnail::before {
    content: attr(data-duration);
    position: absolute;
    background-color: rgba(0, 0, 0, .85);
    color: white;
    right: 5px;
    bottom: 5px;
    padding: .1em .3em;
    border-radius: .3em;
    font-size: .9rem;
}

.thumbnail_image {
    width: 100%;
    height: 100%;
    min-width: 250px;
    min-height: 150px;
    background-color: #AAA;
}

.psion_header {
    display: flex;
}

.video_bottom_section {
    display: flex;
    align-items: flex-start;
    margin-top: 1rem;
}

.channel_icon {
    margin-right: .75rem;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    min-width: 10px;
    min-height: 20px;
    background-color: red;
}

.video_description {
    display: flex;
    flex-direction: column;
}

.video_title {
    font-size: 1.1rem;
    font-weight: bold;
    /* margin-bottom: .5rem; */
    text-decoration: none;
    color: black;
}

.video_channel_name {
    margin-bottom: .1rem;
    text-decoration: none;
    color: black;
    transition: color 150ms;
}

.video_channel_name:hover {
    color: #D3D3D3;
}

.video_channel_name,
.video_metadata {
    color: black;
}

.video-action--add{
    display: inline-block;
    border-radius: 10px;
    background-color: rgb(0, 175, 29);
    border: none;
    color: #FFFFFF;
    font-size: 15px;
    text-align: center;
    padding: 10px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    text-transform : uppercase;
}
.video-action--add:hover{
    background-color: rgba(0, 175, 29, 0.444);
}
.video-action--delete{
    display: inline-block;
    border-radius: 10px;
    background-color: rgb(226, 0, 0);
    border: none;
    color: #FFFFFF;
    font-size: 15px;
    text-align: center;
    padding: 10px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    text-transform : uppercase;
}
.video-action--delete:hover{
    background-color: rgba(226, 0, 0, 0.453);
}
</style>