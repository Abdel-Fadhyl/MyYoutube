<template>
    <div>
		<!-- <div class="container">
			<div class="container--left">
			</div>
			<div class="container--right">
				<h1>Bienvenue aux amoureux de liberté</h1>
				<h2>Découvre et fais découvrir les meilleurs bons plans tout autour du monde</h2>

				<div class="btn--white">Partager un bon plan maintenant</div>
			</div>
  	</div> -->
		<div class="home--middle">
			<div class="list--container">
				<h2>Toutes nos videos</h2>
				<div style="text-align:center">
<!---->
          <section v-for="video in videos" class="video_section">
            <article class="video_container">
              <a href='#' class="thumbnail" data-duration="10">
                <img class="thumbnail_image" src='https://blog.orsys.fr/les-carnets/wp-content/uploads/2021/06/Technologies_web-scaled-e1622616972782-1024x576.jpg' />
              </a>
              <div class="psion_header">
              <div class="video_bottom_section">
                <a href='#'>
                </a>
              </div>
              <div class=video_description>
                <a href='#' class="video_title" > {{ video.title }}</a>
                <a href='#' class="video_channel_name"> Channel </a>
                <div class="video_metadata">
                  <span>{{video.views}} vues </span>
                  &bull;
                  <span>il y a {{video.date}} heures</span>
                  </div>
                </div>
              </div>
            </article>
          </section>
<!---->
        </div>
			</div>
		</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      videos: null
    }
  },
  mounted(){
    this.$axios.$get(process.env.apiUrl + '/videos').then(response => {this.videos = response.data})
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

.container {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  padding-top: 60px;
  box-sizing: border-box;
  font-family: Roboto, Arial, Helvetica, sans-serif;
}
/* h2{
  background-image: url(../pages/images/header.jpg);
  background-size: cover;
} */
.video_section:first-child {
  border-top: none;
}

.list--container{
  padding: 4rem;
}
.video_section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3rem 1rem;
  padding: 3rem 0;
  margin: 0 1.5rem;
}
.video_container {
  display: flex;
  flex-direction: column;
}

.thumbnail {
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

.thumbnail_image{
  width: 100%;
  height: 100%;
  min-width: 250px;
  min-height: 150px;
  background-color: #AAA;
}

.psion_header {
  display: flex ;
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

.home--middle {
	background-color: white;
	padding: 30px 0;
}

.home--middle .list--container {
	max-width: 1200px;
	margin: auto;
}

.home--middle .list--container h2 {
	color: black;
	text-align: center;
    font-size: 2.4rem;
    font-weight: 500;
	margin-bottom: 20px;
}
</style>
