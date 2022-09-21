<template>
    <div class="main_watch">
        <div class="play_container">
        <div class="container">
          <div class="row">
            <div class="play_video">
              <video controls autoPlay id='1' >
              <source src="./video/video.mp4" />
              </video>
              <div class="tags">
                <a href=''>#Coding</a> <a href=''>#Nextjs</a> <a href=''>#HTML</a> <a href=''>#CSS</a>
              </div>
              <h3>Best des Best video Youtube</h3>
              <div class="play_video_info">
                <p>1225 Views &bull; 2 days ago</p>
                <div class="video_reaction">
                <a href="" class="video_reaction_btn"> J'aime</a>
                <a href="" class="video_reaction_btn"> Je n'aime pas</a>
              </div>
            </div>
            </div>
            <div class="right_sidebar">

              <div class="side_video_list">
                <a href="" class="puff">
                  <img class="avatar" src='https://blog.orsys.fr/les-carnets/wp-content/uploads/2021/06/Technologies_web-scaled-e1622616972782-1024x576.jpg' alt='miniature1' />
                </a>
                <div class="vid_info">
                  <a href='' class="small_thumbnail">Best dev</a>
                  <p>Chaine You</p>
                  <p>15k Views</p>
                </div>
              </div>
              <div class="side_video_list">
                <a href="" class="puff">
                  <img class="avatar" src='https://blog.orsys.fr/les-carnets/wp-content/uploads/2021/06/Technologies_web-scaled-e1622616972782-1024x576.jpg' alt='miniature1' />
                </a>
                <div class="vid_info">
                  <a href='' class="small_thumbnail">Best dev</a>
                  <p>Chaine You</p>
                  <p>15k Views</p>
                </div>
              </div>
              <div class="side_video_list">
                <a href="" class="puff">
                  <img class="avatar" src='https://blog.orsys.fr/les-carnets/wp-content/uploads/2021/06/Technologies_web-scaled-e1622616972782-1024x576.jpg' alt='miniature1' />
                </a>
                <div class="vid_info">
                  <a href='' class="small_thumbnail">Best dev</a>
                  <p>Chaine You</p>
                  <p>15k Views</p>
                </div>
              </div>
              <div class="side_video_list">
                <a href="" class="puff">
                  <img class="avatar" src='https://blog.orsys.fr/les-carnets/wp-content/uploads/2021/06/Technologies_web-scaled-e1622616972782-1024x576.jpg' alt='miniature1' />
                </a>
                <div class="vid_info">
                  <a href='' class="small_thumbnail">Best dev</a>
                  <p>Chaine You</p>
                  <p>15k Views</p>
                </div>
              </div>
            </div>
          </div>
          </div>
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
            }
          ],
          videos_test: [
            {name: 'Prendre 2 douche',dueDate: '6.5.2020',dueTime: '12:00'},
            {name: 'Prendre 3 douche',dueDate: '6.5.2020',  dueTime: '12:00'},
            {name: 'Prendre 4 douche',dueDate: '6.5.2020',dueTime: '12:00'},
            {name: 'Prendre 5 douche',dueDate: '6.5.2020',dueTime: '12:00'},
            {name: 'Prendre 5 douche',dueDate: '6.5.2020',dueTime: '12:00'},
            {name: 'Prendre 5 douche',dueDate: '6.5.2020',dueTime: '12:00'},
            {name: 'Prendre 5 douche',dueDate: '6.5.2020', dueTime: '12:00'},  
            {name: 'Prendre 6 douche', dueDate: '6.5.2020', dueTime: '12:00'},
            {name: 'Prendre 6 douche', dueDate: '6.5.2020', dueTime: '12:00'},

          ]
        }
      },
    }
</script>

    
<style scoped>
.play_container{
    padding-left: 2%;
    padding-top: 4%;
}

.row{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.play_video {
    flex-basis: 69%;
}

.right_sidebar {
    flex-basis: 30%;
}

.video_reaction_btn{
  text-decoration: none;
}

.play_video video{
    width: 100%;
}
.side_video_list{
    display: flex; 
    justify-content: space-between;
    margin-bottom: 8px;
    flex-direction: rew;
}

.side_video_list img{
    display: block;
    width: 100%;
    height: 150px;
}

.side_video_list .small_thumbnail{
    flex-basis: 49%;
}
.side_video_list .vid_info{
    flex-basis: 49%;
}
.puff {
    width: 300px;
    height: 100%;
}
.vid_info {
    margin-left: 10px;
}
.small_thumbnail{
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
}
.play_video .tags a{
    color: #0000ff;
    font-size: 13px;
}
.play_video h3{
    font-weight: 600;
    font-size: 22px;
}
.play_video .play_video_info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
    font-size: 14px;
    color: #5a5a5a;
}
.play_video .play_video_info a img{
    width: 20px;
    margin-right: 8px;
}
.play_video .play_video_info a{
    display: inline-flex;
    align-items: center;
    margin-left: 15px;
}
</style>
    