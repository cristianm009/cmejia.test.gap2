using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace cmejia.test.gap2.Models
{
    public partial class dbtestcmgapContext : DbContext
    {
        public dbtestcmgapContext()
        {
        }

        public dbtestcmgapContext(DbContextOptions<dbtestcmgapContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Client> Client { get; set; }
        public virtual DbSet<Policy> Policy { get; set; }
        public virtual DbSet<TypeCovering> TypeCovering { get; set; }
        public virtual DbSet<TypeRisk> TypeRisk { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=tcp:servertestcmgap.database.windows.net,1433;Initial Catalog=dbtestcmgap;Persist Security Info=False;User ID=cmejiao;Password=gaptestserver2019@;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Client>(entity =>
            {
                entity.ToTable("client");

                entity.Property(e => e.ClientId)
                    .HasColumnName("clientId")
                    .ValueGeneratedNever();

                entity.Property(e => e.DateOfBirth)
                    .HasColumnName("dateOfBirth")
                    .HasColumnType("date");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasColumnType("text");

                entity.Property(e => e.Idnumber).HasColumnName("idnumber");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("text");
            });

            modelBuilder.Entity<Policy>(entity =>
            {
                entity.ToTable("policy");

                entity.Property(e => e.PolicyId)
                    .HasColumnName("policyId")
                    .ValueGeneratedNever();

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.Coveragetime).HasColumnName("coveragetime");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasColumnType("text");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("text");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.StartVadilityTime)
                    .HasColumnName("startVadilityTime")
                    .HasColumnType("date");

                entity.Property(e => e.TypeCoveringId).HasColumnName("typeCoveringId");

                entity.Property(e => e.TypeRiskId).HasColumnName("typeRiskId");

                entity.HasOne(d => d.Client)
                    .WithMany(p => p.Policy)
                    .HasForeignKey(d => d.ClientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__policy__clientId__5629CD9C");

                entity.HasOne(d => d.TypeCovering)
                    .WithMany(p => p.Policy)
                    .HasForeignKey(d => d.TypeCoveringId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__policy__typeCove__5812160E");

                entity.HasOne(d => d.TypeRisk)
                    .WithMany(p => p.Policy)
                    .HasForeignKey(d => d.TypeRiskId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__policy__typeRisk__571DF1D5");
            });

            modelBuilder.Entity<TypeCovering>(entity =>
            {
                entity.ToTable("typeCovering");

                entity.Property(e => e.TypeCoveringId)
                    .HasColumnName("typeCoveringId")
                    .ValueGeneratedNever();

                entity.Property(e => e.Descripcion)
                    .HasColumnName("descripcion")
                    .HasColumnType("text");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("text");

                entity.Property(e => e.Percentage).HasColumnName("percentage");
            });

            modelBuilder.Entity<TypeRisk>(entity =>
            {
                entity.ToTable("typeRisk");

                entity.Property(e => e.TypeRiskId)
                    .HasColumnName("typeRiskId")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("text");
            });
        }
    }
}
