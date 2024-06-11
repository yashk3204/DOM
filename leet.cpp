class Solution {
    public:
        vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
            int size1 = arr1.size();
            int size2 = arr2.size();
            vector<int> arr3(size1, 0);
            int k=0;
            for(int i=0; i<size2; i++) {
                for(int j=0; j<size1; j++) {
                    if(arr1[j] == arr2[i]) {
                        arr3[k++] = arr1[j];
                        arr1[j] = 0;
                    }
                }
            }
            sort(arr1.begin(), arr1.end());
            for(int i=0; i<size1; i++) {
                if(arr1[i] != 0) {
                    arr3[k++] = arr1[i];
                }
            }
            return arr3;
        }
    };