func majorityElement(nums []int) int {

	hashTable := make(map[int]int)
	majority := len(nums) / 2
	major := 0

	for _, num := range nums {
		hashTable[num]++
	}

	for i, num := range hashTable {
		if num > majority {
			major = i
		}
	}
	return major
}