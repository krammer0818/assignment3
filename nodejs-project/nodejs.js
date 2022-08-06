async function countBlock() {
    const web3 = new web3(new web3.providers.HttpProvider('https://mainnet.infura.io/v3/eae721551f3f43a8ab5bca30b8df9a58'))
    const startBlockNumber = await web3.eth.getblock('earliest').number
    const endBlockNumbrt = await web3.eth.getBlockNumber()
    var number = 0
    for( var i = startBlockNumber; i <= endBlockNumbrt; i++) {
        let block = await web3.eth.getBlock(i)
        if (block != null) {
            if (block.transaction != null && block.transaction.length != 0) {
                number++
            }
        }
    }
}