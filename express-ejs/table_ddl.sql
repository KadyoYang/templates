use todo;

create table `TODO`
(
    `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` varchar(128) not null comment 'todo title',
    `content` varchar(1024) not null comment 'todo content',
    `createdAt` datetime  null,
    `updatedAt` datetime  null,
    `deletedAt` datetime  null,
    primary key (id)
)