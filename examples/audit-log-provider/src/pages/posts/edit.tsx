import { useEffect } from "react";
import { useForm } from "@refinedev/react-hook-form";
import { useModal, useResource, useSelect } from "@refinedev/core";

import { Modal } from "../../components/modal";
import { History } from "../../components/history";

export const PostEdit: React.FC = () => {
  const { close, show, visible } = useModal();
  const { resourceName, id } = useResource();

  const {
    refineCore: { onFinish, formLoading, query: queryResult },
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const { options } = useSelect({
    resource: "categories",
    defaultValue: queryResult?.data?.data.category.id,
  });

  useEffect(() => {
    resetField("category.id");
  }, [options]);

  return (
    <>
      <div className="actions">
        <h2>Edit Post</h2>
        <button
          onClick={() => {
            show();
          }}
        >
          History
        </button>
      </div>

      <form onSubmit={handleSubmit(onFinish)}>
        <label>Title: </label>
        <input {...register("title", { required: true })} />
        {errors.title && <span>This field is required</span>}
        <br />
        <label>Status: </label>
        <select {...register("status")}>
          <option value="published">published</option>
          <option value="draft">draft</option>
          <option value="rejected">rejected</option>
        </select>
        <br />
        <label>Category: </label>
        <select
          {...register("category.id", {
            required: true,
          })}
          defaultValue={queryResult?.data?.data.category.id}
        >
          {options?.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        {errors.category && <span>This field is required</span>}
        <br />
        <label>Content: </label>
        <br />
        <textarea
          {...register("content", { required: true })}
          rows={10}
          cols={50}
        />
        {errors.content && <span>This field is required</span>}
        <br />

        <input type="submit" value="Submit" />
        {formLoading && <p>Loading</p>}
      </form>

      <Modal isOpen={visible} onClose={close}>
        {resourceName && id && <History resource={resourceName} id={id} />}
      </Modal>
    </>
  );
};
