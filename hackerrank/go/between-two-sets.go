// https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

func getTotalX(a []int32, b []int32) int32 {
    var count int32 = 0
    
    maxA := max(a)
    minB := min(b)
    
    
    for x := maxA; x <= minB; x++ {
      valid := true
      
      for _, num := range a {
        if x % num != 0 {
          valid = false
          break
        }
      }
      
      if valid {
        for _, num := range b {
          if num % x != 0 {
            valid = false
            break
          }
        }
      } 
      
      if valid {
        count++
      }
    }
    
    return count
    
}

func max(slice []int32) int32 {
    max := slice[0]
    for _, v := range slice {
        if v > max {
            max = v
        }
    }
    return max
}

func min(slice []int32) int32 {
    min := slice[0]
    for _, v := range slice {
        if v < min {
            min = v
        }
    }
    return min
}
