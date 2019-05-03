export const updateMsgNum = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) resolve({ code: 200, info: { version: 'thinkphp5.0', 'msg_num': 150 } })
      else reject(err)
    }, 1000)
  })
}
