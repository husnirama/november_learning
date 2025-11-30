const towerOfHanoi = (numDisk, source, auxiliary, target) =>
{
    if (numDisk == 0) {
        return;
    }
    towerOfHanoi(numDisk-1, source, target, auxiliary);
    console.log(`Move disk ${numDisk} from ${source} → ${target}`);
    towerOfHanoi(numDisk-1, auxiliary, source, target);
};

towerOfHanoi(3, "A", "B", "C");
