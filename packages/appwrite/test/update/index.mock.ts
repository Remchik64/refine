import nock from "nock";

nock("https://cloud.appwrite.io:443", { encodedQueryParams: true })
  .patch(
    "/v1/databases/default/collections/blog_posts/documents/669e49f3001cb7c76d6b",
    {
      data: { title: "Updated" },
      permissions: ['read("any")', 'write("any")'],
    },
  )
  .reply(
    200,
    {
      title: "Updated",
      content:
        "Sint ut eveniet distinctio. Quas necessitatibus sint unde explicabo voluptatem culpa voluptas. Similique natus enim iste aspernatur. Voluptate eaque cupiditate non et enim mollitia ut ut. Maxime sed eaque aliquid soluta occaecati aperiam sint repudiandae. Modi nobis ut iste. Iure repellendus ut quod laboriosam error non quidem doloremque esse. Officia nulla dolores earum minus reprehenderit. Ducimus ut eum quos explicabo rerum. Officiis voluptatem iste recusandae.",
      status: "draft",
      images: null,
      $id: "669e49f3001cb7c76d6b",
      $tenant: "169888",
      $createdAt: "2024-07-22T12:00:51.542+00:00",
      $updatedAt: "2024-07-22T13:32:09.747+00:00",
      $permissions: ['read("any")', 'update("any")', 'delete("any")'],
      category: {
        title: "Office & Supplies",
        $id: "office-and-supplies",
        $tenant: "169888",
        $createdAt: "2024-07-22T12:00:35.832+00:00",
        $updatedAt: "2024-07-22T12:00:35.832+00:00",
        $permissions: [],
        $databaseId: "default",
        $collectionId: "categories",
      },
      $databaseId: "default",
      $collectionId: "blog_posts",
    },
    [
      "Access-Control-Allow-Credentials",
      "true",
      "Access-Control-Allow-Headers",
      "Origin, Cookie, Set-Cookie, X-Requested-With, Content-Type, Access-Control-Allow-Origin, Access-Control-Request-Headers, Accept, X-Appwrite-Project, X-Appwrite-Key, X-Appwrite-Locale, X-Appwrite-Mode, X-Appwrite-JWT, X-Appwrite-Response-Format, X-Appwrite-Timeout, X-SDK-Version, X-SDK-Name, X-SDK-Language, X-SDK-Platform, X-SDK-GraphQL, X-Appwrite-ID, X-Appwrite-Timestamp, Content-Range, Range, Cache-Control, Expires, Pragma, X-Forwarded-For, X-Forwarded-User-Agent",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE",
      "Access-Control-Allow-Origin",
      "https://localhost",
      "Access-Control-Expose-Headers",
      "X-Appwrite-Session, X-Fallback-Cookies",
      "Content-Length",
      "1040",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Mon, 22 Jul 2024 13:32:09 GMT",
      "Server",
      "Appwrite",
      "Strict-Transport-Security",
      "max-age=10886400",
      "X-Content-Type-Options",
      "nosniff",
      "X-Debug-Fallback",
      "true",
      "X-Debug-Speed",
      "0.10128998756409",
      "X-Ratelimit-Limit",
      "120",
      "X-Ratelimit-Remaining",
      "119",
      "X-Ratelimit-Reset",
      "1721655180",
      "Connection",
      "close",
    ],
  );
