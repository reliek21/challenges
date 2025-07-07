// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

func countApplesAndOranges(s int32, t int32, a int32, b int32, apples []int32, oranges []int32) {
    var applesCounter int = 0
    var orangesCounter int = 0
    
    for i := 0; i < len(apples); i++ {
        var sum int32 = int32(apples[i] + a)
        
        if sum >= s && sum <= t {
            applesCounter++
        }
    }
    
    for o := 0; o < len(oranges); o++ {
        var sum int32 = int32(oranges[o] + b)
        
        if sum >= s && sum <= t {
            orangesCounter++
        }
    }
    
    fmt.Println(applesCounter)
    fmt.Println(orangesCounter)
}
