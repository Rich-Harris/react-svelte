<script>
	export let count = 0;
	$: double = count * 2;
</script>

<style>
	h1.count {
		color: #ff3e00;
	}

	h1.double {
		color: #40b3ff;
	}
</style>

<h1 class="count">Count: {count}</h1>
<h1 class="double">Double: {double}</h1>
