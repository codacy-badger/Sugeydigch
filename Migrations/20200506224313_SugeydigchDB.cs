﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace SUGEYDIGCH.Migrations
{
    public partial class SugeydigchDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Habitaciones",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumeroHabitacion = table.Column<int>(nullable: false),
                    TipoDeHabitacion = table.Column<string>(nullable: false),
                    Estado = table.Column<string>(nullable: false),
                    Precio = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Habitaciones", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Reservas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdCliente = table.Column<string>(nullable: false),
                    NumeroReserva = table.Column<string>(nullable: false),
                    FechaIngreso = table.Column<string>(nullable: false),
                    FechaSalida = table.Column<string>(nullable: false),
                    DiasEstadia = table.Column<int>(nullable: false),
                    Estado = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservas", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Habitaciones");

            migrationBuilder.DropTable(
                name: "Reservas");
        }
    }
}
