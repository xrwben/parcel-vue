<template>
	<div id="Login">
    <div class="login_wrapper">
      <div class="login_title">
        <h2>登 录</h2>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
	#Login {
		width: 100%;
		height: 100%;
		background: url('../asserts/login-bg.jpg') no-repeat center;
		background-size: 100% 100%;
		display: flex;
		align-items: center;
    justify-content: center;
    & > .login_wrapper {
			width: 400px;
			height: 280px;
			border: 1px solid rgba(255, 255, 255, .2);
			border-radius: 5px;
			background: rgba(0, 0, 0, .2);
			.login_title {
				height: 45px;
				background:rgba(98,174,255,1);
				border-radius: 4px 4px 0px 0px;
				h2 {
					line-height: 45px;
					text-align: center;
					font-size: 22px;
					color: #fff;
					font-weight: normal;
					letter-spacing: 10px;
				}
			}
		}
	}
</style>