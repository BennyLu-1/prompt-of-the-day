<script lang="ts" context="module">
    import {goto} from '$app/navigation';
    let result;
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

<div class="card text-center shadow-2xl bg-primary-content w-1/3 m-auto">
    <div class="card-body text-gray-500">
        <h2 class="card-title">shadow, center, padding</h2> 
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
        <div class="justify-center card-actions">
            <form on:submit|preventDefault={handleLogin}>
                <div class="form-control">
                    <input name="email" type="email" placeholder="Email" class="input input-bordered">
                    <input name="password" type="password" placeholder="Password" class="input input-bordered">
                    <button class="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
            
        </div>
    </div>
</div> 