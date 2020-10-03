const data = [
  ["root", "system", "synchronization-logs"],
  ["root", "system", "synchronization-configs"],
  ["root", "system"],
  ["root", "configs"],
  ["root"],
];

// 期望输出
const output = [
  ["root", "system", "synchronization-logs"],
  ["root", "system", "synchronization-configs"],
  ["root", "configs"],
]

data.filter((value, index, arr) => !arr.some((a, idx) => index != idx && value.every(val => a.includes(val))))

