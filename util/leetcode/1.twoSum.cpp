/*
https://leetcode.com/problems/two-sum/

1. Two Sum
Given an array of integers, return indices of the two numbers such that they add
up to a specific target.

You may assume that each input would have exactly one solution, and you may not
use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Given nums = [3, 2, 4], target = 6,
return [1, 2].
*/

#include <iostream>
#include <vector>
using namespace std;

struct Solution
{
    vector<int> twoSum(vector<int> &nums, int target)
    {
        for (int i = 0; i != nums.size(); i++)
        {
            for (int j = i + 1; j != nums.size(); j++)
            {
                if (nums[i] == target - nums[j])
                {
                    return {i, j};
                }
            }
        }

        return {};
    }
};

int main()
{
    vector<int> nums = {3, 2, 4};
    int target = 6;

    Solution solution;
    vector<int> result = solution.twoSum(nums, target);

    for (auto index : result)
        cout << index << " ";
    cout << endl;
}
