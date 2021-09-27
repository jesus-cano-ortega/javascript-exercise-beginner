function getRandomInt(a,b)
{
	var randomNumber = Math.floor(Math.random(a,b)*10);
	return randomNumber;
}
console.log(getRandomInt(0,7));