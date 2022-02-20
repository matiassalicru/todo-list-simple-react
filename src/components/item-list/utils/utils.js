export const getTask = (taskId, tasks) => {
  const task = tasks.find(task => task.id === taskId)

  return task
}