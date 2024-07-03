// import { createTask, deleteTask, updateTask } from '../../api/task';

export const NewTaskForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const newTask = formData.get('newTask') as string;
    console.log(newTask);
    // const jio = { description: newTask, current: true };
    // createTask({ description: newTask, current: true });
    // updateTask(3, jio);
    // deleteTask(3);
  };

  return (
    <div className='sm:flex sm:items-center sm:justify-between sm:space-x-10 w-10/12'>
      <form className='flex gap-5 w-full' onSubmit={handleSubmit}>
        <input name='newTask' type='text' className='flex-1 rounded-tremor-small border-gray-200 focus:outline-none' />
        <button
          type='submit'
          className='w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit'
        >
          Agregar
        </button>
      </form>
    </div>
  );
};
