<script lang="ts" context="module">
    import {goto} from '$app/navigation';
	async function handleLogin (e) {
        const formData = new FormData(e.target);
        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
		const res = await fetch(import.meta.env.VITE_CMS_API_URL+'auth/local', {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
			body: JSON.stringify({
				identifier: data['email'],
				password: data['password']
			})
		})
		
		const json = await res.json();
        localStorage.setItem('jwt', json.jwt);
        if(json.jwt){
            goto('/');
        }
	}
</script>
<label for="login-modal" class="btn btn-primary modal-button">Login</label> 
<input type="checkbox" id="login-modal" class="modal-toggle"> 
<div class="modal">
  <div class="modal-box">
    <form on:submit|preventDefault={handleLogin}>
        <div class="form-control">
            <input name="email" type="email" placeholder="Email" class="input input-bordered">
        </div>
        <div class="form-control">
            <input name="password" type="password" placeholder="Password" class="input input-bordered">
        </div>
        <div class="modal-action">
        <button class="btn btn-primary" type="submit">Login</button>
        </div>
    </form>
  </div>
</div>